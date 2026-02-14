# 🌟 PROJET OFFICIEL : ABDOULK DIODOI MULTI-SOCIAL 🌟

> **Plateforme Web & Application Mobile (PWA) de nouvelle génération.**
> Un carrefour numérique centralisant : Vidéos, VIP, Paiements et Viralité Sociale.

---

## 🚀 Rôle du Projet
Ce site n'est pas une simple page HTML. C'est une **Progressive Web App (PWA)** conçue pour :
1. **Fédérer une communauté** : Liens directs vers Instagram, YouTube, Telegram et Facebook.
2. **Monétiser l'audience** : Intégration de Google AdSense pour les revenus publicitaires.
3. **Sécuriser les transactions** : Bouton de paiement Orange Money (Sénégal, Mali, Burkina, Côte d'Ivoire).
4. **Protéger la vie privée** : Script JavaScript anti-spam pour l'email et le numéro de téléphone.

---

## 🛠️ Fiches Techniques & Structure

Le projet repose sur 4 fichiers piliers :

| Fichier | Rôle |
| :--- | :--- |
| `index.html` | **Structure & Design** : Contient le HTML, le CSS moderne et le JavaScript (le cerveau). |
| `manifest.json` | **Installation** : Permet au site de s'installer comme une application sur Android/iPhone. |
| `sw.js` | **Service Worker** : Gère la mise en cache pour une navigation fluide sur Opera Mini. |
| `profil.jpg` | **Identité Visuelle** : Ta photo officielle servant d'image de profil et d'icône d'application. |

---

## ⚙️ Configuration Rapide

Pour que le site fonctionne avec **TES** données, modifie ces variables dans le fichier `index.html` :

```javascript
const config = {
    nom: "votre.pseudo",        // Ton identifiant email
    domaine: "gmail.com",       // Ton fournisseur mail
    telephone: "+226 XX XX XX", // Ton numéro Orange Money
    adsense: "ca-pub-XXXXXX",   // Ton ID Google AdSense
    lienOrange: "https://..."   // Ton lien marchand
};
