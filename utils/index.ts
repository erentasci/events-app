export function formatDate(dateString: string): string {
  if (!dateString || typeof dateString !== "string") return "";
  try {
    const [year, month, day] = dateString.split("T")[0].split("-");
    return `${day}.${month}.${year}`;
  } catch (error) {
    console.warn("Tarih formatlama hatası:", error);
    return "";
  }
}
