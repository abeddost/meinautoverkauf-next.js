import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
  estimated_price: number;
  price_min: number;
  price_max: number;
  market_trend: string;
  price_explanation: string;
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
  photoUrls: string[]
): Promise<void> => {
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

  // Vehicle Information
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Fahrzeugdaten', margin, yPos);
  yPos += 7;

  const vehicleData = [
    ['Marke', estimation.brand],
    ['Modell', estimation.model],
    ...(estimation.variant ? [['Variante', estimation.variant]] : []),
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
  doc.text(`€ ${estimation.estimated_price.toLocaleString('de-DE')}`, margin + 5, yPos + 22);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100);
  doc.text(
    `Preisspanne: € ${estimation.price_min.toLocaleString('de-DE')} - € ${estimation.price_max.toLocaleString('de-DE')}`,
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
          doc.addImage(b64, x, y, photoWidth, photoHeight);
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
      'MeinAutoPreis24 • www.meinautoverkauf.de',
      margin,
      doc.internal.pageSize.getHeight() - 10
    );
  }

  // Generate filename
  const fileName = `Bewertung_${estimation.brand}_${estimation.model}_${new Date(estimation.created_at).toISOString().split('T')[0]}.pdf`;

  // Save
  doc.save(fileName);
};
