# 🌟 PROJET OFFICIEL : ABDOULK DIODOI MULTI-SOCIAL 🌟

> **Plateforme Web & Application Mobile (PWA) de nouvelle génération.**
> Un carrefour numérique centralisant : Vidéos, VIP, Paiements et Viralité Sociale.

---

## 🚀 Rôle du Projet
Ce site n'est pas une simple page HTML. C'est une **Progressive Web App (PWA)** conçue pour **ABDOULK DIODOI** :
1. **Fédérer une communauté** : Liens directs vers Instagram, YouTube, Telegram et Facebook.
2. **Monétiser l'audience** : Intégration de **Google AdSense** pour les revenus publicitaires.
3. **Sécuriser les transactions** : Bouton de paiement **Orange Money** (Sénégal, Mali, Burkina, Côte d'Ivoire).
4. **Protéger la vie privée** : Script JavaScript anti-spam pour l'email et le numéro de téléphone.

---

## 🛠️ Fiches Techniques & Structure

Le projet repose sur 4 fichiers piliers :

| Fichier | Rôle |
| :--- | :--- |
| `index.html` | **Structure & SEO** : Contenu principal et balises AdSense. |
| `style.css` | **Design Moderne** : Interface responsive (mobile/desktop). |
| `manifest.json` | **Installation** : Permet au site de s'installer comme une application. |
| `sw.js` | **Service Worker** : Mise en cache pour une navigation fluide. |
| `profil.jpg` | **Identité Visuelle** : Photo officielle de **ABDOULK DIODOI**. |

---

## ⚙️ Configuration Rapide

Pour que le site fonctionne avec **TES** données, modifie ces variables dans ton script :

```javascript
const config = {
    nom: "ABDOULK DIODOI",       // Ton nom officiel en majuscules
    pseudo: "nes.zon36",         // Ton identifiant email
    domaine: "gmail.com",        // Ton fournisseur mail
    telephone: "+226 07 85 71 89", // Ton numéro Orange Money
    adsenseId: "ca-pub-2088689215228427", // Ton ID Google AdSense
    lienOrange: "https://pay.orange.bf..." // Ton lien marchand
};
