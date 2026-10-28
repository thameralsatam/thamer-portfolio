# الملف 13: إزالة شريط التقدم من الرأس

**نفّذ الخطوات حرفياً. في الملف `src/components/layout/Header.tsx` ابحث عن كل نص "القديم" بالضبط واستبدله بالنص "الجديد" (الفارغ يعني احذفه). لا تغيّر أي شيء آخر. بعد الانتهاء اكتب فقط: تم الملف رقم 13.**

**1) احذف هذا السطر:**
```
  const [progress, setProgress] = useState(0);
```

**2) القديم:**
```
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
```
**الجديد:**
```
      setScrolled(window.scrollY > 8);
```

**3) احذف هذا السطر (وما قبله من سطر فارغ إن وُجد):**
```
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
```
