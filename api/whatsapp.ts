import { Linking } from "react-native";

export async function openWhatsapp(text: string) {
  const url = `https://wa.me/?text=${text}`;
  const encoded = encodeURI(url);
  try {
    await Linking.openURL(encoded);
  } catch (err) {
    console.error(err)
  }
}
