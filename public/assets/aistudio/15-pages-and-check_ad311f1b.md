# الملف 15: ترتيب الصفحتين والفحص

**نفّذ الخطوات حرفياً وبالترتيب. في كل ملف ابحث عن نص "القديم" بالضبط واستبدله بالنص "الجديد". لا تغيّر أي شيء آخر ولا تحسّن شيئاً.**

## 1) `src/pages/HomePage.tsx`

القديم:
```
<div className="space-y-28 sm:space-y-40">
```
الجديد:
```
<div className="space-y-24 sm:space-y-36">
```

القديم:
```
<h2 className="title mb-12">{t.home.featuredTitle}</h2>
```
الجديد:
```
<h2 className="title mb-8 sm:mb-10">{t.home.featuredTitle}</h2>
```

## 2) `src/pages/ProjectsPage.tsx`

القديم:
```
<div className="project-list mt-16 sm:mt-24">
```
الجديد:
```
<div className="project-list mt-12 sm:mt-16">
```

## 3) `src/pages/ProjectDetailPage.tsx`

القديم:
```
<nav className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6">
```
الجديد:
```
<nav className="mt-16 grid gap-4 sm:grid-cols-2">
```

## 4) الفحص (للفحص فقط، لا تعدّل شيئاً)

شغّل `npm run lint` ثم `npm run build`. إذا ظهر خطأ برمجي أصلحه بأقل تغيير دون المساس بالتصميم أو النصوص، واذكر لي ما غيّرته حرفياً. ثم افتح الموقع وأخبرني بأي صفحة فيها خطأ، واكتب: تم الملف رقم 15.
