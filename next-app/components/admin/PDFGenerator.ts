// jspdf is browser-only; dynamic imports prevent SSR errors

async function fetchImageAsBase64(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

interface Estimation {
  id: string;
  created_at: string;
  status: string;
  verkaufsstatus: 'Pending' | 'Accepted' | 'Rejected';
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  variant: string;
  year: string;
  mileage: string;
  fuel_type: string;
  transmission: string;
  power: string;
  body_type: string;
  condition: string;
  estimated_price: number | null;
  price_min: number | null;
  price_max: number | null;
  market_trend: string | null;
  price_explanation: string | null;
  postal_code: string | null;
  color: string | null;
  doors: string | null;
  vin: string | null;
  desired_price: string | null;
  final_sale_price: number | null;
  commission_percentage: number | null;
  commission_amount: number | null;
  commission_paid: boolean;
  rejection_reason: string | null;
}

export const generateEstimationPDF = async (
  estimation: Estimation,
  photoUrls: string[],
  options?: { hideCustomer?: boolean }
): Promise<void> => {
  const [{ default: jsPDF }, { default: autoTable }] = await Promise.all([
    import('jspdf'),
    import('jspdf-autotable'),
  ]);
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  let yPos = margin;

  // Header
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Fahrzeugbewertung', margin, yPos);
  yPos += 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100);
  doc.text(`Bewertungs-ID: ${estimation.id}`, margin, yPos);
  doc.text(`Datum: ${new Date(estimation.created_at).toLocaleDateString('de-DE')}`, pageWidth - margin - 60, yPos);
  yPos += 10;

  // Divider line
  doc.setDrawColor(200);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 10;

  doc.setTextColor(0);

  // Customer Information
  if (!options?.hideCustomer) {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Kundeninformationen', margin, yPos);
    yPos += 7;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const customerData = [
      ['Name', `${estimation.first_name} ${estimation.last_name}`],
      ['E-Mail', estimation.email],
      ['Telefon', estimation.phone],
      ...(estimation.postal_code ? [['PLZ', estimation.postal_code]] : []),
      ...(estimation.desired_price ? [['Wunschpreis', `${estimation.desired_price} €`]] : []),
    ];

    autoTable(doc, {
      startY: yPos,
      head: [],
      body: customerData,
      theme: 'plain',
      styles: { fontSize: 10, cellPadding: 2 },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 40 },
        1: { cellWidth: 'auto' },
      },
      margin: { left: margin, right: margin },
    });

    yPos = (doc as any).lastAutoTable.finalY + 10;
  }

  // Vehicle Information
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Fahrzeugdaten', margin, yPos);
  yPos += 7;

  const vehicleData = [
    ['Marke', estimation.brand],
    ['Modell', estimation.model],
    ...(estimation.variant && estimation.variant.trim() !== (estimation.model || '').trim() ? [['Variante', estimation.variant]] : []),
    ['Baujahr', estimation.year],
    ['Kilometerstand', `${estimation.mileage} km`],
    ['Kraftstoff', estimation.fuel_type],
    ['Getriebe', estimation.transmission],
    ['Leistung', estimation.power],
    ['Karosserie', estimation.body_type],
    ['Zustand', estimation.condition],
    ...(estimation.color ? [['Farbe', estimation.color]] : []),
    ...(estimation.doors ? [['Türen', estimation.doors]] : []),
    ...(estimation.vin ? [['FIN/VIN', estimation.vin]] : []),
  ];

  autoTable(doc, {
    startY: yPos,
    head: [],
    body: vehicleData,
    theme: 'plain',
    styles: { fontSize: 10, cellPadding: 2 },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 40 },
      1: { cellWidth: 'auto' },
    },
    margin: { left: margin, right: margin },
  });

  yPos = (doc as any).lastAutoTable.finalY + 10;

  // Valuation Information
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Bewertung', margin, yPos);
  yPos += 7;

  // Price box
  doc.setFillColor(255, 237, 213); // light orange
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 40, 3, 3, 'F');

  doc.setFontSize(12);
  doc.setTextColor(0);
  doc.text('Geschätzter Marktwert:', margin + 5, yPos + 10);
  
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(234, 88, 12); // brand orange
  doc.text(
    estimation.estimated_price != null
      ? `€ ${estimation.estimated_price.toLocaleString('de-DE')}`
      : 'Preis ausstehend',
    margin + 5,
    yPos + 22
  );

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100);
  doc.text(
    estimation.price_min != null && estimation.price_max != null
      ? `Preisspanne: € ${estimation.price_min.toLocaleString('de-DE')} - € ${estimation.price_max.toLocaleString('de-DE')}`
      : 'Preisspanne: ausstehend',
    margin + 5,
    yPos + 32
  );

  yPos += 50;
  doc.setTextColor(0);

  // Photos
  if (photoUrls.length > 0) {
    // Fetch all images as base64 in parallel (up to 6)
    const limitedUrls = photoUrls.slice(0, 6);
    const base64Images = await Promise.all(limitedUrls.map(fetchImageAsBase64));

    if (yPos > 200) {
      doc.addPage();
      yPos = margin;
    }

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0);
    doc.text('Fahrzeugfotos', margin, yPos);
    yPos += 10;

    const photoWidth = (pageWidth - 3 * margin) / 2;
    const photoHeight = photoWidth * 0.75;
    const pageH = doc.internal.pageSize.getHeight();

    let rowStartY = yPos;

    for (let i = 0; i < base64Images.length; i++) {
      const col = i % 2;

      if (col === 0 && i > 0) {
        rowStartY += photoHeight + 5;
      }

      if (rowStartY + photoHeight > pageH - margin) {
        doc.addPage();
        rowStartY = margin;
      }

      const x = margin + col * (photoWidth + margin);
      const y = rowStartY;

      const b64 = base64Images[i];
      if (b64) {
        try {
          const imgProps = doc.getImageProperties(b64);
          const imgW = Number(imgProps.width) || photoWidth;
          const imgH = Number(imgProps.height) || photoHeight;
          const scale = Math.min(photoWidth / imgW, photoHeight / imgH);
          const drawW = Math.max(1, imgW * scale);
          const drawH = Math.max(1, imgH * scale);
          const drawX = x + (photoWidth - drawW) / 2;
          const drawY = y + (photoHeight - drawH) / 2;

          // Preserve aspect ratio to avoid stretched photos.
          doc.setFillColor(245, 245, 245);
          doc.rect(x, y, photoWidth, photoHeight, 'F');
          doc.addImage(b64, imgProps.fileType || 'JPEG', drawX, drawY, drawW, drawH);
        } catch {
          doc.setDrawColor(200, 200, 200);
          doc.setFillColor(245, 245, 245);
          doc.roundedRect(x, y, photoWidth, photoHeight, 2, 2, 'FD');
        }
      } else {
        doc.setDrawColor(200, 200, 200);
        doc.setFillColor(245, 245, 245);
        doc.roundedRect(x, y, photoWidth, photoHeight, 2, 2, 'FD');
      }
    }

    yPos = rowStartY + photoHeight + 10;
  }

  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150);
    const pageText = `Seite ${i} von ${pageCount}`;
    const pageTextWidth = doc.getTextWidth(pageText);
    doc.text(pageText, (pageWidth - pageTextWidth) / 2, doc.internal.pageSize.getHeight() - 10);
    doc.text(
      'MeinAutoVerkauf.de • www.meinautoverkauf.de',
      margin,
      doc.internal.pageSize.getHeight() - 10
    );
  }

  // Generate filename: Marke, Modell, Baujahr, km, Getriebe, Leistung (no prefix)
  const safe = (s: string) => (s ?? '').replace(/[\s/\\]+/g, '_').slice(0, 25);
  const mileageNum = (estimation.mileage ?? '').replace(/\D/g, '') || '0';
  const fileName = `${safe(estimation.brand)}_${safe(estimation.model)}_${estimation.year}_${mileageNum}km_${safe(estimation.transmission)}_${safe(estimation.power)}.pdf`;

  // Save
  doc.save(fileName);
};
