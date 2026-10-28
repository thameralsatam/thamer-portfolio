# الملف 11: تعديلات تنفيذية محددة

**نفّذ الخطوات حرفياً وبالترتيب. كل تعديل أدناه: ابحث في الملف المذكور عن النص "القديم" بالضبط واستبدله بالنص "الجديد" بالضبط. لا تغيّر أي شيء آخر ولا تحسّن شيئاً. بعد الانتهاء اكتب فقط: تم الملف رقم 11.**

## 1) `src/i18n/translations.ts`

القديم:
```
fontat: 'يعمل وظيفياً، ويحتاج إلى مراجعة أمنية وخصوصية قبل الاستخدام الموثوق',
```
الجديد:
```
fontat: 'يعمل وظيفياً، ويحتاج مراجعة أمنية قبل الاعتماد عليه',
```

## 2) `src/pages/ContactPage.tsx` (حذف الهاتف: أربعة تعديلات)

**أ) القديم:**
```
import { Check, Code, Copy, Mail, MapPin, Phone } from 'lucide-react';
```
**الجديد:**
```
import { Check, Code, Copy, Mail, MapPin } from 'lucide-react';
```

**ب) احذف هذين السطرين بالكامل:**
```
const PHONE_DISPLAY = '+49 152 14170410';
const PHONE_RAW = '+4915214170410';
```

**ج) احذف هذا السطر بالكامل من مصفوفة `rows`:**
```
    { key: 'phone', icon: Phone, label: c.phoneLabel, text: PHONE_DISPLAY, href: `tel:${PHONE_RAW}`, copyValue: PHONE_RAW },
```

**د) القديم:**
```
<div className="mt-16 border-b border-line sm:mt-24">
```
**الجديد (للمحافظة على الإيقاع):**
```
<div className="mt-14 border-b border-line sm:mt-20">
```

## 3) `src/components/demos/MosqueDemo.tsx` (تكبير أزرار النقاط للمس)

القديم:
```
className={`absolute grid h-8 w-8 -translate-x-1/2
```
الجديد:
```
className={`absolute grid h-10 w-10 -translate-x-1/2
```

## 4) `src/components/demos/TrainingsplanDemo.tsx` (مساحة لمس أكبر للتمارين)

القديم:
```
className="flex w-full items-center justify-between gap-4 py-4 text-start"
```
الجديد:
```
className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-start"
```
