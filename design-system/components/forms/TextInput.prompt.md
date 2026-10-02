TextInput (+ TagInput, CounterInput) — see the JSDoc on each export in TextInput.jsx for what & when.

```jsx
<TextInput label="Email" required leftIcon="MailLine" placeholder="nama@perusahaan.co.id" hint="Kami akan mengirim kode verifikasi." />
<TextInput label="Kata Sandi" type="password" leftIcon="Lock2Line" />
```

md 40px (r10), sm 36 (r8), xs 32 (r8). Hover = bg-weak-50 w/o stroke; focus = strong-950 stroke + neutral ring; error = error-base stroke. type="password" adds an eye toggle.
