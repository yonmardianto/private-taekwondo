// Generate WhatsApp message link
export function generateWhatsAppLink(
  phoneNumber: string,
  message: string,
): string {
  const encodedMessage = encodeURIComponent(message);
  // Remove any non-digit characters from phone number and ensure it starts with country code
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  const formattedPhone = cleanPhone.startsWith("62")
    ? cleanPhone
    : `62${cleanPhone}`;

  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

// Format phone number for display
export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("62")) {
    return `+${digits.substring(0, 2)} ${digits.substring(2, 4)} ${digits.substring(4, 8)} ${digits.substring(8)}`;
  }
  return phone;
}
