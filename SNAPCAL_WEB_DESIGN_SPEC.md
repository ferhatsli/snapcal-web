# SnapCal Web Design Spec (Apple-Style)

**Versiyon:** v1  
**Tarih:** 2026-04-06  
**Hedef:** `snapcal-web` için Vercel uyumlu, Apple benzeri, çok sayfalı website tasarım ve implementasyon spesifikasyonu.

---

## 1) Amaç ve Kapsam

Bu doküman, SnapCal mobil uygulamasının görsel dili ve ürün hikayesini web'e taşıyan karar-tamam bir tasarım spesidir.

Kapsam:
- Çok sayfalı site: `/`, `/pricing`, `/faq`, `/privacy`, `/terms`
- Tasarım sistemi (renk, tipografi, spacing, radius, component davranışları)
- Sayfa bazlı içerik hiyerarşisi, CTA yapısı ve responsive kuralları
- Next.js 15 + Tailwind ile uygulanabilir teknik sözleşme
- Vercel deploy öncesi kalite checklist'i

Kapsam dışı:
- Backend entegrasyonu
- Ödeme altyapısının web'de canlıya alınması
- Legal metinlerin nihai hukuk onayı

---

## 2) Referans Kaynaklar (Mobil Source of Truth)

Bu doküman şu dosyalardaki değerleri web'e taşır:

- `../snapcal/constants/colors.ts`
- `../snapcal/constants/typography.ts`
- `../snapcal/constants/spacing.ts`
- `../snapcal/features/onboarding/steps.ts`
- `../snapcal/docs/snapcal-design-system.md`
- `../snapcal/docs/snapcal-onboardingflow.md`
- `../snapcal/components/PrimaryButton.tsx`
- `../snapcal/components/OptionCard.tsx`
- `../snapcal/components/ProgressHeader.tsx`
- `../snapcal/components/ResultsGraphCard.tsx`
- `../snapcal/components/onboarding/SocialProofScreen.tsx`
- `../snapcal/components/onboarding/PlanReadyScreen.tsx`
- `../snapcal/constants/pricing.ts`

Kullanılacak ana görseller:
- `../snapcal/assets/images/hero-camera-crop.png`
- `../snapcal/assets/images/hero-preview.png`
- `../snapcal/assets/images/apple-health-illustration.png`
- `../snapcal/assets/images/burned-calories-illustration.png`
- `../snapcal/assets/images/trust-illustration.png`
- `../snapcal/assets/images/all-done-illustration.png`

---

## 3) Marka Tonu ve Mesaj Çerçevesi

### Ana değer önerisi
- "Calorie tracking made easy"
- Fotoğraf çek, kaloriyi saniyeler içinde öğren, düzenli takip et.

### Ton
- Sade, sakin, güven veren.
- Agresif satış dili yok.
- Kısa cümle, yüksek netlik.
- Apple benzeri minimal ve premium algı.

### İçerik prensipleri
- Başlıklar kısa ve net.
- Alt metinlerde fayda anlatımı.
- Sosyal kanıt ve güven sinyalleri sade sunulur.
- Fiyat bölümü şeffaf: "No free trial. Cancel anytime."

---

## 4) Bilgi Mimarisi

### Zorunlu sayfalar
- `/` Home (ana landing)
- `/pricing` Pricing (planlar + satın alma CTA)
- `/faq` SSS
- `/privacy` Gizlilik Politikası
- `/terms` Kullanım Şartları

### Header gezinme
- Logo: SnapCal
- Linkler: Features (home içi anchor), Pricing, FAQ
- Sağ CTA: "Get Started"

### Footer gezinme
- Product: Home, Pricing, FAQ
- Legal: Privacy, Terms
- App: iOS için yönlendirme alanı (ileride App Store linki eklenecek)

---

## 5) Tasarım Sistemi

## 5.1 Renk Tokenları (Mobil birebir)

```css
:root {
  --bg: #FFFFFF;
  --text-primary: #1A1A2E;
  --text-secondary: #6B7280;
  --text-disabled: #9CA3AF;
  --surface: #F3F4F6;
  --surface-card: #F9FAFB;
  --surface-selected: #1D1B27;
  --border-subtle: #E8E8ED;

  --progress-track: #E5E7EB;
  --progress-fill: #1D1B27;

  --cta-bg: #1D1B27;
  --cta-disabled-bg: #D1D5DB;
  --cta-text: #FFFFFF;

  --accent-red: #EF4444;
  --accent-orange: #F97316;
  --accent-blue: #6366F1;
  --accent-green: #22C55E;
  --star: #F59E0B;
  --pink-soft: #FBE8EC;
  --purple-soft: #E8E0F6;
}
```

Renk kullanım kuralı:
- Arayüzün %85'i nötr (beyaz/siyah/gri).
- Renkler yalnızca data viz, başarı, rating ve vurgu için.
- Seçili state: koyu zemin + beyaz metin.

## 5.2 Tipografi (SF Pro odaklı)

Font stack:
```css
font-family: "SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Ölçek (mobilden türetilmiş web karşılığı):
- Display XL: 52/800/-1.5 (splash/branding)
- H1: 48/700/-1.0 (desktop hero)
- H2: 32/800/-0.8
- H3: 24/700/-0.5
- Body L: 18/500
- Body: 16/400
- Body S: 15/400
- Caption: 13/500

Başlık kuralı:
- Negatif letter-spacing korunacak.
- Satır uzunluğu 10-14 kelimeyi geçmeyecek.
- Hero başlık max 2 satır.

## 5.3 Spacing ve Radius

Temel spacing skalası:
- `4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96`

Mobil token referansı:
- `screenHorizontal = 20`
- `optionGap = 12`
- `titleSubtitleGap = 8`
- `ctaBottomSafeArea = 34`

Radius:
- Pill: `28px`
- Card: `14px`
- Small card: `12px`
- Chart card: `16px`

## 5.4 Gölge ve Sınır

Apple-benzeri minimal görünüm için:
- Ana kartlar: `border: 1px solid var(--border-subtle)`
- Gölge çok hafif:
  - `0 1px 2px rgba(16, 24, 40, 0.04)`
  - `0 8px 24px rgba(16, 24, 40, 0.06)` sadece hero phone frame

---

## 6) Component Sözleşmesi

## 6.1 Primary CTA

Özellikler:
- Yükseklik: `56px`
- Radius: `28px`
- Arkaplan: `var(--cta-bg)`
- Metin: 17/600 beyaz
- Hover: opaklık %92
- Disabled: `var(--cta-disabled-bg)`

Metin örnekleri:
- Get Started
- Start Subscription
- Continue with Apple

## 6.2 Secondary Button / Link CTA

- Arkaplan yok
- Metin: `var(--text-primary)` 16/600
- Hover: alt çizgi veya %80 opaklık

## 6.3 Option Card

Varyantlar:
- `default`: açık gri yüzey
- `selected`: koyu yüzey + beyaz metin
- `outlined`: beyaz yüzey + ince border

Boyut:
- Min yükseklik `52-62px`
- Yatay iç boşluk `16px`
- Dikey iç boşluk `14px`
- Radius `14px` (outlined için `12px`)

## 6.4 Pricing Card

İçerik:
- Plan adı
- Fiyat satırı (`$9.99 / week`, `$39.99 / year`)
- Kısa açıklama
- "Most Popular" badge (yearly için)

State:
- Seçili kart koyu border alır (`#1D1B27`)
- Arkaplan çok açık griye döner

## 6.5 Social Proof Card

İçerik:
- Avatar/baş harf
- İsim
- 5 yıldız
- 1 kısa yorum

Kart stili:
- `surface` arkaplan
- `14px` radius
- Dikey liste halinde 3 adet

## 6.6 FAQ Accordion

- Tekli aç/kapa davranışı
- Başlık 17/600
- Cevap 15/400
- Açılan panelde hafif üst boşluk (`8px`)

## 6.7 Header

- Sticky (scroll'da üstte kalır)
- Şeffaf -> beyaz blur geçişi (scroll > 12px)
- Yükseklik: `72px desktop`, `64px mobile`

## 6.8 Footer

- 3 kolon desktop, stack mobile
- Legal linkleri her sayfada görünür
- Alt satır: copyright + ürün adı

---

## 7) Sayfa Bazlı Tasarım

## 7.1 `/` Home

Section sırası:
1. **Header**
2. **Hero**
3. **Trust Strip (rating + user count)**
4. **How It Works (3 adım)**
5. **Results Graph (SnapCal vs Traditional)**
6. **Apple Health Integration**
7. **Social Proof Cards**
8. **Pricing Preview**
9. **Final CTA band**
10. **Footer**

### Hero
- Sol: başlık + alt metin + birincil CTA + ikincil link
- Sağ: iPhone frame içinde `hero-camera-crop.png`
- Arkaplan: beyaz, çok hafif radial glow (gri ton)

Kopya:
- Başlık: `Calorie tracking made easy`
- Alt metin: `Just snap your meal and get accurate calorie insights in seconds.`
- Primary CTA: `Get Started`
- Secondary: `Already have an account? Sign In`

### Trust Strip
- `4.8` yıldız puanı
- `250K+ App Ratings`
- `10M+ SnapCal Users`

### How It Works
- Step 1: Snap your meal
- Step 2: Get AI nutrition analysis
- Step 3: Track progress daily

### Results Graph
- Mobildeki `ResultsGraphCard` anlatısını web'e taşı:
  - SnapCal eğrisi aşağı yönlü (hedefe iniş)
  - Geleneksel diyet eğrisi dalgalı/yukarı
- Sol metin: sürdürülebilir sonuç vurgusu
- Sağ: SVG/Canvas grafik bileşeni

### Apple Health Section
- Görsel: `apple-health-illustration.png`
- Metin: Apple Health ile aktivite ve kalori senkronu
- CTA: `Learn More` veya `Get Started`

### Social Proof
- 3 yorum kartı (mobildeki örnek yorumlar kullanılır)

### Pricing Preview
- Weekly + Yearly kartları
- Alt not: `No free trial. Cancel anytime from subscription settings.`
- CTA: `Start Subscription`

### Final CTA Band
- Kısa başlık: "Ready to make tracking effortless?"
- Tek CTA: `Get Started`

## 7.2 `/pricing`

Section sırası:
1. Header
2. Page intro
3. İki plan kartı
4. Karşılaştırma tablosu (özellikler)
5. Güven notları (iptal, gizlilik, şeffaf fiyat)
6. Mini FAQ
7. Footer

Planlar (mobil birebir):
- Weekly Plan: `$9.99 / week`
- Yearly Plan: `$39.99 / year`

Varsayılan vurgu:
- Yearly plan "Most Popular" etiketiyle öne çıkar.

## 7.3 `/faq`

Önerilen soru seti:
1. SnapCal nasıl çalışır?
2. AI kaloriyi ne kadar doğru hesaplar?
3. Apple Health ile senkron var mı?
4. Aboneliği nasıl iptal ederim?
5. Free trial var mı?
6. Hangi cihazları destekliyor?
7. Verilerim nasıl korunuyor?
8. Offline kullanım var mı?

Kural:
- Cevaplar kısa paragraf (max 3 satır desktop).

## 7.4 `/privacy`

Yapı:
- Son güncelleme tarihi
- Toplanan veri tipleri
- Veri kullanım amaçları
- 3. taraf servisler
- Veri saklama süresi
- Kullanıcı hakları
- İletişim

Not:
- Hukuki metin canlıya çıkmadan önce avukat kontrolü zorunlu.

## 7.5 `/terms`

Yapı:
- Hizmet kapsamı
- Hesap sorumluluğu
- Abonelik ve faturalama
- İptal/iade koşulları
- Sorumluluk sınırları
- Hizmet değişikliği
- Uyuşmazlık ve iletişim

Not:
- Hukuki geçerlilik için son metin legal review sonrası sabitlenir.

---

## 8) Responsive Davranış

Breakpoints:
- Mobile: `320-767`
- Tablet: `768-1023`
- Desktop: `1024-1439`
- Wide: `1440+`

Kurallar:
- Hero iki kolon -> mobilde tek kolon.
- Header linkleri mobilde drawer menüye düşer.
- Pricing kartları desktop yan yana, mobil stack.
- İçerik max genişlik:
  - genel: `1200px`
  - text-heavy: `920px`
- Global yatay padding:
  - mobile `20px`
  - tablet `28px`
  - desktop `40px`

---

## 9) Motion ve Etkileşim

Prensip:
- Düşük yoğunlukta, anlamlı motion.
- "Gösterişli" değil, "akıcı".

Animasyon kuralları:
- Fade/slide-in: `240-320ms`, `ease-out`
- Hover transition: `160-200ms`
- CTA hover: hafif opacity veya 1px yukarı kayma
- Scroll reveal: yalnızca ana section başlıklarında

Reduced motion:
- `prefers-reduced-motion` aktifse tüm reveal/transform animasyonları kapatılır.

---

## 10) Erişilebilirlik Kuralları

- Tüm metin/zemin kontrastı WCAG AA minimum.
- Klavye focus ring görünür olmalı.
- Form alanları `label` ile eşleşmeli.
- Accordion, tabs, menu için ARIA rolleri.
- Görsellerde anlamlı `alt` metni.
- Başlık hiyerarşisi: tek `h1`, ardından `h2/h3`.

---

## 11) Next.js 15 + Tailwind Uygulama Sözleşmesi

## 11.1 Önerilen klasör yapısı

```txt
app/
  layout.tsx
  page.tsx
  pricing/page.tsx
  faq/page.tsx
  privacy/page.tsx
  terms/page.tsx
  globals.css
components/
  layout/
    site-header.tsx
    site-footer.tsx
  sections/
    home-hero.tsx
    home-trust-strip.tsx
    home-how-it-works.tsx
    home-results.tsx
    home-health-sync.tsx
    home-social-proof.tsx
    home-pricing-preview.tsx
  ui/
    button.tsx
    option-card.tsx
    pricing-card.tsx
    faq-accordion.tsx
lib/
  design-tokens.ts
public/
  images/
```

## 11.2 Tailwind token map

Tailwind tema anahtarları:
- `colors.snap.bg`, `snap.textPrimary`, `snap.textSecondary`, `snap.surface`, `snap.cta`
- `borderRadius.pill = 28px`, `card = 14px`
- `spacing.5 = 20px` (mobil horizontal token ile uyum)

## 11.3 Global CSS prensipleri

- Root'ta token tanımı (`:root` değişkenleri)
- Body:
  - `background: var(--bg)`
  - `color: var(--text-primary)`
  - `-webkit-font-smoothing: antialiased`

---

## 12) SEO, Performans ve Vercel Hazırlığı

## 12.1 SEO
- Her sayfada unique `title` ve `description`
- Open Graph:
  - `og:title`, `og:description`, `og:image`
- Canonical URL tanımları
- `robots.txt` ve `sitemap.xml`

## 12.2 Performans
- LCP hedefi: `< 2.5s`
- CLS hedefi: `< 0.1`
- Görseller `next/image` ile optimize
- Hero görseli preload
- Font fallback ve layout shift azaltımı

## 12.3 Vercel
- `main` branch otomatik deploy
- Preview deploy aktif
- Environment variable şablonu hazırlanacak
- Domain bağlama ve HTTPS zorunlu

---

## 13) İçerik Kopyası (v1)

### Home Hero
- `Calorie tracking made easy`
- `Just snap your meal and get accurate calorie insights in seconds.`
- CTA: `Get Started`

### Pricing
- `Unlock SnapCal Premium`
- `Choose a plan to continue. SnapCal requires an active subscription.`
- `Weekly Plan` / `$9.99 / week`
- `Yearly Plan` / `$39.99 / year`
- `No free trial. Cancel anytime from subscription settings.`

### FAQ Tonu
- Teknik değil, kullanıcı odaklı cevaplar.
- Net ve kısa.

---

## 14) Kabul Kriterleri (Definition of Done)

- Home, Pricing, FAQ, Privacy, Terms sayfaları tasarımca tutarlı ve birbirine bağlı.
- Renk, tipografi, radius ve CTA davranışları bu dokümandaki tokenlara uyumlu.
- Mobile (375px), tablet (768px), desktop (1440px) görünümde kırılma yok.
- Lighthouse:
  - Performance >= 90
  - Accessibility >= 95
  - Best Practices >= 95
  - SEO >= 95
- Klavye navigasyonu ve focus state tüm etkileşimli elementlerde çalışır.
- Footer’dan legal sayfalara erişim mümkün.

---

## 15) Notlar

- Bu doküman, web implementasyonu için tasarım "source of truth" olarak kullanılacaktır.
- Uygulama sırasında yeni bir tasarım kararı gerekirse bu dosya güncellenmeden kod tarafında karar verilmez.
- Legal metinler placeholder değil, production'a çıkmadan önce nihai sürüme taşınmalıdır.
