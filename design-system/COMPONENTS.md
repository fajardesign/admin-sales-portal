# Amar Bank DS — Component API Reference

> Auto-generated from `components/**/*.d.ts` + `*.prompt.md`. Do not edit by hand — regenerate instead.
> Import path (from repo root): `design-system/components/<group>/<File>.jsx` or the barrel `design-system/index.js`.

## actions/

### Button  ·  `components/actions/Button.jsx`

```jsx
<Button variant="filled" leftIcon={<Icon name="AddLine" />}>Transfer Baru</Button>
<Button variant="stroke" tone="neutral" size="sm">Batal</Button>
```

md=40px (r10, p10), sm=36 (r8, p8), xs=32 (r8, p6), 2xs=28. Focus ring = 2px white + 4px primary-alpha-10. Neutral stroke is the default secondary.

```ts
export interface ButtonProps {
  children?: React.ReactNode;
  variant?: "filled" | "stroke" | "lighter" | "ghost";
  tone?: "primary" | "neutral" | "error";
  size?: "md" | "sm" | "xs" | "2xs";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit";
  onClick?: (e: any) => void;
  style?: React.CSSProperties;
  }
```
Exports: `Button`

### ButtonGroup  ·  `components/actions/ButtonGroup.jsx`

```jsx
<ButtonGroup value={v} onChange={setV} items={[{label:'Harian'},{label:'Mingguan'},{label:'Bulanan'}]} />
```

Joined segments with 0.5px shared hairlines; active = bg-weak-50 + strong text.

```ts
export interface ButtonGroupProps {
  items?: {
  label?: React.ReactNode;
  value?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean }[];
  value?: string;
  onChange?: (v: string) => void;
  size?: "sm" | "xs" | "2xs";
  style?: React.CSSProperties;
  }
export interface ButtonGroupItemProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  size?: "sm" | "xs" | "2xs";
  first?: boolean;
  last?: boolean;
  onClick?: () => void;
  }
```
Exports: `ButtonGroup`, `ButtonGroupItem`

### CompactButton  ·  `components/actions/CompactButton.jsx`

```jsx
<CompactButton variant="ghost" icon={<Icon name="CloseLine" />} aria-label="Close" />
```

Close buttons in modals/drawers, row "more" actions. modifiable = for dark/colored surfaces.

```ts
export interface CompactButtonProps {
  icon: React.ReactNode;
  variant?: "stroke" | "ghost" | "white" | "modifiable";
  size?: "lg" | "md";
  fullRadius?: boolean;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
  style?: React.CSSProperties;
  }
```
Exports: `CompactButton`

### FAB  ·  `components/actions/FAB.jsx`

```jsx
<FAB style={{position:'fixed',right:24,bottom:24}} />
```

48px jewel-blue circle, defaults to the customer-service (Bantuan) icon.

```ts
export interface FABProps {
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
  style?: React.CSSProperties;
  }
```
Exports: `FAB`

### FancyButton  ·  `components/actions/FancyButton.jsx`

```jsx
<FancyButton type="primary">Get Started</FancyButton>
```

Elevated with an inner top highlight — use sparingly for hero CTAs.

```ts
export interface FancyButtonProps {
  children?: React.ReactNode;
  type?: "neutral" | "primary" | "error" | "basic";
  size?: "md" | "sm" | "xs";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  }
```
Exports: `FancyButton`

### LinkButton  ·  `components/actions/LinkButton.jsx`

```jsx
<LinkButton tone="primary" rightIcon={<Icon name="ArrowRightSLine" size={16}/>}>Lihat Semua</LinkButton>
```

Uses Mulish 500 (as in the Figma source).

```ts
export interface LinkButtonProps {
  children?: React.ReactNode;
  /** Figma ships primary only;
  gray / black / error are local-only tones. */ tone?: "primary" | "gray" | "black" | "error";
  /** md = Label/Small 16/24, sm = Label/X Small 12/16. */ size?: "md" | "sm";
  /** Force underline. Without it, sm underlines on hover/keyboard focus;
  md never does. */ underline?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  }
```
Exports: `LinkButton`

### SelectedButton  ·  `components/actions/SelectedButton.jsx`

```jsx
<SelectedButton selected>Semua</SelectedButton>
```

Selected = primary-alpha-10 bg + primary text.

```ts
export interface SelectedButtonProps {
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  }
```
Exports: `SelectedButton`

### SocialButton  ·  `components/actions/SocialButton.jsx`

```jsx
<SocialButton logo={<img src="google.svg" width={20}/>}>Continue with Google</SocialButton>
```

Provider logos are not bundled; pass your own.

```ts
export interface SocialButtonProps {
  children?: React.ReactNode;
  logo?: React.ReactNode;
  iconOnly?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  }
```
Exports: `SocialButton`

## forms/

### Checkbox  ·  `components/forms/Checkbox.jsx`

```jsx
<CheckboxLabel label="Ingat saya" />
```

16px box radius 4; unchecked shows an inset white 13px face on bg-soft-200.

```ts
export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties;
  }
export interface CheckboxLabelProps {
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  flip?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties;
  }
export interface ChoiceTextProps {
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  descriptionSize?: "sm" | "xs";
  disabled?: boolean;
  onClick?: () => void;
  }
```
Exports: `Checkbox`, `CheckboxLabel`, `ChoiceText`

### CheckboxCard  ·  `components/forms/CheckboxCard.jsx`

```jsx
<RadioCard media={<KeyIcon icon="BankLine" />} label="Transfer Online" description="Real-time, maks. Rp 50 juta" checked />
```

360px, radius 12, 16 padding, 14 gap. Active = 1px primary stroke.

```ts
export interface CheckboxCardProps {
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  media?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  width?: number | string;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties;
  }
export interface RadioCardProps {
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  media?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  width?: number | string;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties;
  }
export interface SwitchCardProps {
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  media?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  width?: number | string;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties;
  }
```
Exports: `CheckboxCard`, `RadioCard`, `SwitchCard`

### ColorDots  ·  `components/forms/ColorDots.jsx`

```jsx
<ColorDots value="blue" onChange={setC} />
```

Keys: gray blue orange red green yellow purple sky pink teal.

```ts
export interface ColorDotsProps {
  colors?: string[];
  value?: string;
  onChange?: (c: string) => void;
  style?: React.CSSProperties;
  }
export interface ColorDotProps {
  color?: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  }
```
Exports: `ColorDots`, `ColorDot`

### DigitInput  ·  `components/forms/DigitInput.jsx`

```jsx
<DigitInput length={6} value={otp} onChange={setOtp} />
```

OTP / PIN entry. InlineInput is borderless edit-in-place.

```ts
export interface DigitInputProps {
  length?: number;
  value?: string;
  onChange?: (v: string) => void;
  error?: boolean;
  disabled?: boolean;
  width?: number;
  style?: React.CSSProperties;
  }
export interface InlineInputProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  icon?: string | React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange?: (v: string) => void;
  /** Called with the current value when the check button or Enter is pressed. */ onSave?: (v: string) => void;
  /** Called with the restored value when the close button or Escape is pressed (value reverts to what it was on focus). */ onCancel?: (v: string) => void;
  style?: React.CSSProperties;
  }
```
Exports: `DigitInput`, `InlineInput`

### Field  ·  `components/forms/Field.jsx`

```jsx
<Label required sublabel="(Optional)">Nama Rekening</Label>
<HintText state="error">Nomor rekening tidak valid</HintText>
```

Field stacks Label → control → HintText with 4px gaps.

```ts
export interface FieldProps {
  label?: React.ReactNode;
  required?: boolean;
  sublabel?: React.ReactNode;
  info?: boolean;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface LabelProps {
  children?: React.ReactNode;
  required?: boolean;
  sublabel?: React.ReactNode;
  info?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  style?: React.CSSProperties;
  }
export interface HintTextProps {
  children?: React.ReactNode;
  state?: "default" | "error" | "disabled";
  icon?: boolean;
  style?: React.CSSProperties;
  }
export interface CharacterCounterProps {
  count?: number;
  max?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
  }
```
Exports: `Field`, `Label`, `HintText`, `CharacterCounter`

### FileUploadArea  ·  `components/forms/FileUploadArea.jsx`

```jsx
<FileUploadArea onFiles={upload} />
<FileUploadCard name="mutasi-sep.pdf" state="success" size="120 KB of 120 KB" />
```

```ts
export interface FileUploadAreaProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: React.ReactNode;
  onFiles?: (files: File[]) => void;
  style?: React.CSSProperties;
  }
export interface FileUploadCardProps {
  name?: string;
  size?: string;
  progress?: number;
  state?: "uploading" | "success" | "error";
  onRemove?: () => void;
  onRetry?: () => void;
  style?: React.CSSProperties;
  }
export interface FileFormatIconProps {
  format?: string;
  color?: "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "purple" | "pink" | "gray";
  size?: number;
  }
export interface ImageUploadProps {
  image?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  type?: "avatar" | "company";
  layout?: "horizontal" | "vertical";
  onUpload?: () => void;
  onRemove?: () => void;
  style?: React.CSSProperties;
  }
```
Exports: `FileUploadArea`, `FileUploadCard`, `FileFormatIcon`, `ImageUpload`

### IntegrationSwitch  ·  `components/forms/IntegrationSwitch.jsx`

```jsx
<IntegrationSwitch logo={<img src="app.svg"/>} title="Accounting Sync" description="Sinkronkan mutasi ke software akuntansi." />
```

```ts
export interface IntegrationSwitchProps {
  logo?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (v: boolean) => void;
  layout?: "horizontal" | "vertical";
  variant?: "card" | "list";
  action?: React.ReactNode;
  style?: React.CSSProperties;
  }
```
Exports: `IntegrationSwitch`

### PasswordStrength  ·  `components/forms/PasswordStrength.jsx`

```jsx
<PasswordStrength password={pw} />
```

3 segments: error → warning → success.

```ts
export interface PasswordStrengthProps {
  password?: string;
  rules?: {
  label: string;
  test: (s: string) => boolean }[];
  style?: React.CSSProperties;
  }
```
Exports: `PasswordStrength`

### Radio  ·  `components/forms/Radio.jsx`

```jsx
<RadioGroup value={v} onChange={setV} options={[{label:'Sekarang'},{label:'Terjadwal'}]} />
```

```ts
export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties;
  }
export interface RadioLabelProps {
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  flip?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties;
  }
export interface RadioGroupProps {
  options?: {
  label: React.ReactNode;
  value?: string;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean }[];
  value?: string;
  onChange?: (v: string) => void;
  gap?: number;
  style?: React.CSSProperties;
  }
```
Exports: `Radio`, `RadioLabel`, `RadioGroup`

### Rating  ·  `components/forms/Rating.jsx`

```jsx
<Rating value={4.5} showValue reviews={128} />
```

Supports half values.

```ts
export interface RatingProps {
  value?: number;
  max?: number;
  type?: "star" | "heart";
  size?: number;
  onChange?: (v: number) => void;
  showValue?: boolean;
  reviews?: number;
  style?: React.CSSProperties;
  }
export interface RatingCellProps {
  type?: "star" | "heart";
  selected?: boolean;
  onClick?: () => void;
  }
export interface RatingBarProps {
  items?: React.ReactNode[];
  value?: number;
  onChange?: (i: number) => void;
  style?: React.CSSProperties;
  }
```
Exports: `Rating`, `RatingCell`, `RatingBar`

### Select  ·  `components/forms/Select.jsx`

```jsx
<Select label="Rekening Sumber" options={[{label:'Giro • 1234',value:'a'}]} placeholder="Pilih rekening" />
```

Menu = radius 16 surface with stroke + modal shadow; selected option shows a primary check.

```ts
export interface SelectProps {
  label?: React.ReactNode;
  required?: boolean;
  sublabel?: React.ReactNode;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  size?: "md" | "sm" | "xs";
  options?: {
  label: React.ReactNode;
  value?: string;
  icon?: string | React.ReactNode }[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  leftIcon?: string | React.ReactNode;
  onChange?: (v: string) => void;
  style?: React.CSSProperties;
  }
export interface CompactSelectProps {
  options?: {
  label: React.ReactNode;
  value?: string;
  icon?: string | React.ReactNode }[];
  value?: string;
  defaultValue?: string;
  icon?: string | React.ReactNode;
  size?: "md" | "sm" | "xs";
  error?: boolean;
  disabled?: boolean;
  onChange?: (v: string) => void;
  style?: React.CSSProperties;
  }
export interface InlineSelectProps {
  options?: {
  label: React.ReactNode;
  value?: string }[];
  value?: string;
  defaultValue?: string;
  icon?: string | React.ReactNode;
  disabled?: boolean;
  onChange?: (v: string) => void;
  style?: React.CSSProperties;
  }
```
Exports: `Select`, `CompactSelect`, `InlineSelect`

### Slider  ·  `components/forms/Slider.jsx`

```jsx
<Slider label="Limit" defaultValue={40} />
```

Values are 0–100 percentages.

```ts
export interface SliderProps {
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  value?: number;
  defaultValue?: number;
  onChange?: (v: number) => void;
  format?: (v: number) => string;
  style?: React.CSSProperties;
  }
export interface RangeSliderProps {
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (v: [number, number]) => void;
  format?: (a: number, b: number) => string;
  style?: React.CSSProperties;
  }
```
Exports: `Slider`, `RangeSlider`

### Switch  ·  `components/forms/Switch.jsx`

```jsx
<SwitchLabel label="Notifikasi email" description="Kirim ringkasan transaksi harian." flip />
```

28×16 track; knob shrinks to 10px while pressed.

```ts
export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties;
  }
export interface SwitchLabelProps {
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  flip?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties;
  }
```
Exports: `Switch`, `SwitchLabel`

### TextArea  ·  `components/forms/TextArea.jsx`

```jsx
<TextArea label="Catatan" sublabel="(Optional)" maxLength={200} />
```

Radius 12, counter bottom-right.

```ts
export interface TextAreaProps {
  label?: React.ReactNode;
  required?: boolean;
  sublabel?: React.ReactNode;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  rows?: number;
  onChange?: (v: string) => void;
  style?: React.CSSProperties;
  }
```
Exports: `TextArea`

### TextInput  ·  `components/forms/TextInput.jsx`

```jsx
<TextInput label="Email" required leftIcon="MailLine" placeholder="nama@perusahaan.co.id" hint="Kami akan mengirim kode verifikasi." />
<TextInput label="Kata Sandi" type="password" leftIcon="Lock2Line" />
```

md 40px (r10), sm 36 (r8), xs 32 (r8). Hover = bg-weak-50 w/o stroke; focus = strong-950 stroke + neutral ring; error = error-base stroke. type="password" adds an eye toggle.

```ts
export interface TextInputProps {
  label?: React.ReactNode;
  required?: boolean;
  sublabel?: React.ReactNode;
  info?: boolean;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  size?: "md" | "sm" | "xs";
  leftIcon?: string | React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  rightIcon?: string | React.ReactNode;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  }
export interface TagInputProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  size?: "md" | "sm" | "xs";
  placeholder?: string;
  tags?: string[];
  onChange?: (tags: string[]) => void;
  style?: React.CSSProperties;
  }
export interface CounterInputProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  size?: "md" | "sm" | "xs";
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (n: number) => void;
  style?: React.CSSProperties;
  }
```
Exports: `TextInput`, `TagInput`, `CounterInput`

## display/

### Accordion  ·  `components/display/Accordion.jsx`

```jsx
<Accordion title="Berapa limit transfer harian?">Limit default Rp 500 juta per hari.</Accordion>
```

440px reference width, radius 10.

```ts
export interface AccordionProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  icon?: string | React.ReactNode | null;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (open: boolean) => void;
  flipIcon?: boolean;
  style?: React.CSSProperties;
  }
```
Exports: `Accordion`

### Avatar  ·  `components/display/Avatar.jsx`

```jsx
<Avatar src="assets/avatars/arthur-taylor.png" size={48} status="online" badge="verified" />
```

Persona images live in assets/avatars/. Without src it renders initials on a pastel solid.

```ts
export interface AvatarProps {
  src?: string;
  name?: string;
  size?: 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;
  color?: number;
  status?: "online" | "offline" | "busy" | "away";
  badge?: "verified" | "pin" | "favorite" | "add" | "remove" | "notification";
  icon?: boolean;
  style?: React.CSSProperties;
  }
export interface AvatarStatusProps {
  status?: "online" | "offline" | "busy" | "away";
  size?: number;
  }
export interface AvatarBadgeProps {
  type?: "verified" | "pin" | "favorite" | "add" | "remove" | "notification";
  size?: number;
  }
export interface AvatarGroupProps {
  avatars?: {
  src?: string;
  name?: string }[];
  size?: number;
  max?: number;
  style?: React.CSSProperties;
  }
export interface CompactAvatarGroupProps {
  avatars?: {
  src?: string;
  name?: string }[];
  count?: number;
  size?: 24 | 32 | 40;
  variant?: "default" | "stroke";
  style?: React.CSSProperties;
  }
```
Exports: `Avatar`, `AvatarStatus`, `AvatarBadge`, `AvatarGroup`, `CompactAvatarGroup`

### Badge  ·  `components/display/Badge.jsx`

```jsx
<Badge color="green">+5%</Badge>
<StatusBadge status="pending" icon={<Icon name="AlertFill" size={16}/>}>Menunggu Persetujuan</StatusBadge>
```

Badge = full pill on state-*-lighter; StatusBadge = radius 6.

```ts
export interface BadgeProps {
  children?: React.ReactNode;
  color?: "gray" | "blue" | "red" | "green" | "yellow" | "orange" | "purple" | "pink" | "teal" | "sky";
  type?: "basic" | "dot" | "number";
  size?: "sm" | "md";
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  disabled?: boolean;
  /** @deprecated ignored — sm is always Subheading/2X Small uppercase, md Label/X Small. */ uppercase?: boolean;
  style?: React.CSSProperties;
  }
export interface StatusBadgeProps {
  children?: React.ReactNode;
  status?: "completed" | "failed" | "pending" | "information" | "disabled";
  dot?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  }
```
Exports: `Badge`, `StatusBadge`

### ChartLegend  ·  `components/display/ChartLegend.jsx`

```jsx
<ChartLegend color="blue">Income</ChartLegend>
```

Colors map to state-* base tokens.

```ts
export interface ChartLegendProps {
  color?: string;
  children?: React.ReactNode;
  size?: "sm" | "lg";
  disabled?: boolean;
  style?: React.CSSProperties;
  }
export interface ChartLegendDotProps {
  color?: string;
  disabled?: boolean;
  }
```
Exports: `ChartLegend`, `ChartLegendDot`

### ContentCard  ·  `components/display/ContentCard.jsx`

```jsx
<ContentCard media={<Avatar name="Laura Perez"/>} label="Laura Perez" description="Finance Admin" />
```

```ts
export interface ContentCardProps {
  media?: React.ReactNode;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  size?: "md" | "lg";
  action?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface ContentLabelProps {
  media?: React.ReactNode;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  size?: "md" | "lg";
  style?: React.CSSProperties;
  }
```
Exports: `ContentCard`, `ContentLabel`

### ContentDivider  ·  `components/display/ContentDivider.jsx`

```jsx
<ContentDivider type="text-line">ATAU</ContentDivider>
```

```ts
export interface ContentDividerProps {
  type?: "line" | "text-line" | "text" | "solid-text";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  }
```
Exports: `ContentDivider`

### KeyIcon  ·  `components/display/KeyIcon.jsx`

```jsx
<KeyIcon icon="ArrowLeftDownLine" />
```

Round medallion used for list leading icons (transactions, widgets).

```ts
export interface KeyIconProps {
  icon?: string | React.ReactNode;
  variant?: "stroke" | "lighter";
  color?: "gray" | "blue" | "red" | "green" | "yellow" | "orange" | "purple" | "pink" | "teal" | "sky" | "primary";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  style?: React.CSSProperties;
  }
```
Exports: `KeyIcon`

### ProgressBar  ·  `components/display/ProgressBar.jsx`

```jsx
<ProgressBarLabel title="Limit harian terpakai" value={64} />
```

```ts
export interface ProgressBarProps {
  value?: number;
  color?: "primary" | "red" | "orange" | "green" | string;
  style?: React.CSSProperties;
  }
export interface ProgressBarLabelProps {
  title?: React.ReactNode;
  value?: number;
  color?: string;
  position?: "top" | "right";
  hint?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface CircularProgressProps {
  value?: number;
  size?: number;
  color?: string;
  label?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface StepperDotProps {
  count?: number;
  active?: number;
  size?: "sm" | "xs";
  onChange?: (i: number) => void;
  style?: React.CSSProperties;
  }
```
Exports: `ProgressBar`, `ProgressBarLabel`, `CircularProgress`, `StepperDot`

### Table  ·  `components/display/Table.jsx`

```jsx
<Table columns={[{key:'name',header:'Penerima',sortable:true},{key:'amount',header:'Nominal',align:'right'}]} rows={rows} />

<TableRowCell priority="leading" media={<KeyIcon size="md" />} title="Budi Santoso" description="budi@amarbank.co.id" />
<TableRowCell misc><StatusBadge status="completed">Aktif</StatusBadge></TableRowCell>
```

Header row is 40px bg-weak-50 with rounded ends (Paragraph/Small sub-600, 20px sort icons) and an 8px gap before the body; rows are separated by `TableRowDivider` (4px gap, 1px line, 4px gap). Row cell priority: leading = Label/Small strong, regular = Paragraph/Small strong, passive = Paragraph/Small sub-600.

```ts
export interface TableProps {
  columns?: {
  key: string;
  header: React.ReactNode;
  render?: (row: any) => React.ReactNode;
  align?: "left" | "right" | "center";
  width?: number | string;
  sortable?: boolean;
  misc?: boolean }[];
  rows?: any[];
  size?: "lg" | "xl";
  onRowClick?: (row: any) => void;
  style?: React.CSSProperties;
  }
export interface TableHeaderCellProps {
  children?: React.ReactNode;
  sort?: "none" | "asc" | "desc";
  onSort?: () => void;
  align?: string;
  width?: number | string;
  first?: boolean;
  last?: boolean;
  disabled?: boolean;
  checkbox?: {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void };
  style?: React.CSSProperties;
  }
export interface TableRowCellProps {
  children?: React.ReactNode;
  size?: "lg" | "xl";
  align?: string;
  priority?: "leading" | "regular" | "passive";
  title?: React.ReactNode;
  description?: React.ReactNode;
  media?: React.ReactNode;
  checkbox?: {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void };
  radio?: {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void };
  misc?: boolean;
  style?: React.CSSProperties;
  }
export interface TableRowDividerProps {
  colSpan: number;
  }
export interface SortingIconProps {
  dir?: "none" | "asc" | "desc";
  disabled?: boolean;
  }
```
Exports: `Table`, `TableHeaderCell`, `TableRowCell`, `TableRowDivider`, `SortingIcon`

### Tag  ·  `components/display/Tag.jsx`

```jsx
<Tag onDismiss={remove}>Payroll</Tag>
```

```ts
export interface TagProps {
  children?: React.ReactNode;
  sublabel?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "stroke" | "gray";
  dismissible?: boolean;
  disabled?: boolean;
  onDismiss?: () => void;
  style?: React.CSSProperties;
  }
```
Exports: `Tag`

## feedback/

### Alert  ·  `components/feedback/Alert.jsx`

```jsx
<Alert status="warning" size="lg" title="Transaksi menunggu persetujuan" actionLabel="Tinjau">2 transfer memerlukan approval.</Alert>
```

All statuses use the *-lighter tint as background.

```ts
export interface AlertProps {
  status?: "error" | "warning" | "success" | "information" | "feature";
  size?: "sm" | "lg";
  title?: React.ReactNode;
  children?: React.ReactNode;
  actionLabel?: React.ReactNode;
  onAction?: () => void;
  secondaryLabel?: React.ReactNode;
  onSecondary?: () => void;
  dismissible?: boolean;
  onDismiss?: () => void;
  style?: React.CSSProperties;
  }
export interface ToastProps {
  status?: "error" | "warning" | "success" | "information" | "feature";
  title?: React.ReactNode;
  children?: React.ReactNode;
  actionLabel?: React.ReactNode;
  onAction?: () => void;
  dismissible?: boolean;
  onDismiss?: () => void;
  style?: React.CSSProperties;
  }
```
Exports: `Alert`, `Toast`

### BottomSheet  ·  `components/feedback/BottomSheet.jsx`

```jsx
<BottomSheet open header={<BottomSheetHeader title="Pilih Rekening"/>}>…</BottomSheet>
```

Header type in Mulish (per source).

```ts
export interface BottomSheetProps {
  open?: boolean;
  onClose?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
  }
export interface BottomSheetHeaderProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: string;
  status?: "error" | "warning" | "success" | "information";
  onClose?: () => void;
  style?: React.CSSProperties;
  }
export interface BottomSheetFooterProps {
  left?: React.ReactNode;
  children?: React.ReactNode;
  stretch?: boolean;
  style?: React.CSSProperties;
  }
export interface StatusBottomSheetProps {
  status?: "error" | "warning" | "success" | "information" | "feature";
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
  }
```
Exports: `BottomSheet`, `BottomSheetHeader`, `BottomSheetFooter`, `StatusBottomSheet`

### Drawer  ·  `components/feedback/Drawer.jsx`

```jsx
<Drawer open header={<DrawerHeader title="Detail Transaksi" onClose={close}/>} footer={<DrawerFooter><Button>Unduh Bukti</Button></DrawerFooter>}>…</Drawer>
```

400px, inset 8px, radius 20, slides from right.

```ts
export interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  width?: number;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface DrawerHeaderProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: string;
  badge?: React.ReactNode;
  size?: "sm" | "lg";
  onClose?: () => void;
  style?: React.CSSProperties;
  }
export interface DrawerFooterProps {
  left?: React.ReactNode;
  children?: React.ReactNode;
  stretch?: boolean;
  style?: React.CSSProperties;
  }
```
Exports: `Drawer`, `DrawerHeader`, `DrawerFooter`

### Modal  ·  `components/feedback/Modal.jsx`

```jsx
<Modal open onClose={close}>
  <ModalHeader title="Konfirmasi Transfer" icon="SendPlaneLine" onClose={close} />
  <div style={{padding:20}}>…</div>
  <ModalFooter><Button variant="stroke" tone="neutral" size="sm">Batal</Button><Button size="sm">Kirim</Button></ModalFooter>
</Modal>
```

Dialog radius 20; overlay = overlay-soft + 4px blur.

```ts
export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  width?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface ModalHeaderProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: string | React.ReactNode;
  status?: "error" | "warning" | "success" | "information";
  size?: "md" | "sm";
  onClose?: () => void;
  style?: React.CSSProperties;
  }
export interface ModalFooterProps {
  left?: React.ReactNode;
  children?: React.ReactNode;
  stretch?: boolean;
  style?: React.CSSProperties;
  }
export interface StatusModalProps {
  status?: "error" | "warning" | "success" | "information";
  title?: React.ReactNode;
  children?: React.ReactNode;
  alignment?: "horizontal" | "vertical";
  actions?: React.ReactNode;
  style?: React.CSSProperties;
  }
```
Exports: `Modal`, `ModalHeader`, `ModalFooter`, `StatusModal`

### NotificationItem  ·  `components/feedback/NotificationItem.jsx`

```jsx
<NotificationItem avatar={{name:'Emma Wright'}} title="Emma menyetujui transfer Rp 24.000.000" time="2 menit lalu" unread />
```

```ts
export interface NotificationItemProps {
  avatar?: {
  src?: string;
  name?: string };
  title?: React.ReactNode;
  time?: React.ReactNode;
  description?: React.ReactNode;
  unread?: boolean;
  message?: React.ReactNode;
  file?: {
  name: string;
  size?: string;
  /** @deprecated Figma uses the attachment-2 icon;
  ignored. */ format?: string };
  actions?: React.ReactNode;
  onMore?: () => void;
  style?: React.CSSProperties;
  }
export interface NotificationsTabMenuItem {
  label: React.ReactNode;
  value?: string;
  icon?: string;
  badge?: React.ReactNode }
export interface NotificationsTabMenuProps {
  items?: NotificationsTabMenuItem[];
  secondaryItems?: NotificationsTabMenuItem[];
  value?: string;
  onChange?: (v: string) => void;
  actionIcon?: string;
  onAction?: () => void;
  actionLabel?: string;
  style?: React.CSSProperties;
  }
export interface ActivityFeedFileItemProps {
  name?: React.ReactNode;
  size?: React.ReactNode;
  onDownload?: () => void;
  style?: React.CSSProperties;
  }
export interface ActivityFeedCommentItemProps {
  children?: React.ReactNode;
  actionLabel?: React.ReactNode;
  onAction?: () => void;
  style?: React.CSSProperties;
  }
export interface ActivityFeedTaskStatusItemProps {
  status?: ActivityFeedTaskStatus;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface ActivityFeedItemProps {
  avatar?: {
  src?: string;
  name?: string };
  icon?: string;
  actor?: React.ReactNode;
  title?: React.ReactNode;
  target?: React.ReactNode;
  time?: React.ReactNode;
  files?: ActivityFeedFileItemProps[];
  comment?: React.ReactNode | ActivityFeedCommentItemProps;
  avatars?: {
  src?: string;
  name?: string }[];
  avatarCount?: number;
  tasks?: {
  status?: ActivityFeedTaskStatus;
  label?: React.ReactNode }[];
  onMore?: () => void;
  children?: React.ReactNode;
  last?: boolean;
  style?: React.CSSProperties;
  }
export interface ActivityFeedFilterProps {
  children?: React.ReactNode;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
  }
```
Exports: `NotificationItem`, `NotificationsTabMenu`, `ActivityFeedFileItem`, `ActivityFeedCommentItem`, `ActivityFeedTaskStatusItem`, `ActivityFeedItem`, `ActivityFeedFilter`

### Popover  ·  `components/feedback/Popover.jsx`

```jsx
<Popover trigger={<Button>Info</Button>} title="Fitur baru" footer={<PopoverFooter type="stepper" primary={<Button size="xs">Next</Button>} />}>…</Popover>
```

```ts
export interface PopoverProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (o: boolean) => void;
  placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
  width?: number;
  media?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface PopoverFooterProps {
  type?: "stretch" | "text-stepper" | "stepper";
  step?: number;
  steps?: number;
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  style?: React.CSSProperties;
  }
```
Exports: `Popover`, `PopoverFooter`

### Tooltip  ·  `components/feedback/Tooltip.jsx`

```jsx
<Tooltip content="Salin nomor rekening"><CompactButton icon={<Icon name="FileCopyLine"/>}/></Tooltip>
```

```ts
export interface TooltipProps {
  content?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  size?: "2xs" | "xs" | "lg";
  dark?: boolean;
  placement?: "top" | "bottom" | "left" | "right";
  style?: React.CSSProperties;
  }
```
Exports: `Tooltip`

## navigation/

### Breadcrumbs  ·  `components/navigation/Breadcrumbs.jsx`

```jsx
<Breadcrumbs items={[{label:'Beranda',icon:'HomeSmile2Line'},{label:'Transfer'},{label:'Konfirmasi'}]} />
```

```ts
export interface BreadcrumbsProps {
  items?: {
  label: React.ReactNode;
  icon?: string;
  href?: string;
  onClick?: () => void }[];
  divider?: "arrow" | "slash" | "dot";
  style?: React.CSSProperties;
  }
```
Exports: `Breadcrumbs`

### Calendar  ·  `components/navigation/Calendar.jsx`

```jsx
<DateRangePicker footer={<><Button variant="stroke" tone="neutral" size="sm">Batal</Button><Button size="sm">Terapkan</Button></>} />
```

Weeks start Monday.

```ts
export interface CalendarProps {
  month?: Date;
  onMonthChange?: (month: Date) => void;
  value?: Date | [Date, Date | null];
  onChange?: (v: any) => void;
  mode?: "single" | "range";
  marked?: Date[];
  minDate?: Date;
  style?: React.CSSProperties;
  }
export interface DateRangePickerProps {
  value?: [Date, Date | null];
  onChange?: (v: any) => void;
  presets?: string[] | null;
  mode?: "single" | "range";
  footer?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface DayCellProps {
  day?: number;
  active?: boolean;
  inRange?: boolean;
  marked?: boolean;
  disabled?: boolean;
  muted?: boolean;
  onClick?: () => void;
  }
export interface DateSelectorProps {
  label?: React.ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
  style?: React.CSSProperties;
  }
export interface PeriodRangeProps {
  children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  }
export interface DayLabelProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  }
```
Exports: `Calendar`, `DateRangePicker`, `DayCell`, `DateSelector`, `PeriodRange`, `DayLabel`

### CommandMenu  ·  `components/navigation/CommandMenu.jsx`

```jsx
<CommandMenu groups={[{title:'Menu',items:[{title:'Transfer',icon:'ArrowLeftRightLine'}]}]} />
```

```ts
export interface CommandMenuProps {
  groups?: {
  title: string;
  items: {
  title: React.ReactNode;
  icon?: string;
  media?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  size?: "sm" | "md" }[] }[];
  query?: string;
  onQueryChange?: (q: string) => void;
  placeholder?: string;
  onSelect?: (item: any) => void;
  style?: React.CSSProperties;
  }
export interface CommandMenuItemProps {
  icon?: string;
  media?: React.ReactNode;
  title?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  size?: "sm" | "md";
  active?: boolean;
  onClick?: () => void;
  }
```
Exports: `CommandMenu`, `CommandMenuItem`

### Dropdown  ·  `components/navigation/Dropdown.jsx`

```jsx
<Dropdown><DropdownItem icon="User6Line" label="Profil" /><DropdownItem icon="LogoutBoxRLine" label="Keluar" /></Dropdown>
```

```ts
export interface DropdownProps {
  children?: React.ReactNode;
  width?: number;
  search?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface DropdownItemProps {
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  icon?: string | React.ReactNode;
  media?: React.ReactNode;
  trailing?: React.ReactNode;
  checkbox?: boolean;
  selected?: boolean;
  disabled?: boolean;
  size?: "sm" | "md";
  onClick?: () => void;
  }
export interface DropdownSearchProps {
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  }
export interface DropdownGroupLabelProps {
  children?: React.ReactNode;
  }
```
Exports: `Dropdown`, `DropdownItem`, `DropdownSearch`, `DropdownGroupLabel`

### HorizontalFilter  ·  `components/navigation/HorizontalFilter.jsx`

```jsx
<HorizontalFilter left={<ButtonGroup items={[{label:'Semua'},{label:'Masuk'},{label:'Keluar'}]}/>} search={<TextInput size="xs" leftIcon="Search2Line" placeholder="Cari…"/>} />
```

```ts
export interface HorizontalFilterProps {
  left?: React.ReactNode;
  search?: React.ReactNode;
  right?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface VerticalFilterItemProps {
  icon?: string;
  label?: React.ReactNode;
  value?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  }
export interface ScrollAreaProps {
  children?: React.ReactNode;
  height?: number | string;
  style?: React.CSSProperties;
  }
```
Exports: `HorizontalFilter`, `VerticalFilterItem`, `ScrollArea`

### PageHeader  ·  `components/navigation/PageHeader.jsx`

```jsx
<PageHeader media={<Avatar size={48} src=".../arthur-taylor.png"/>} title="Arthur Taylor" description="Selamat datang kembali" actions={<Button variant="stroke" tone="neutral">Bantuan</Button>} />
```

WidgetCard is the dashboard widget shell (radius 16).

```ts
export interface PageHeaderProps {
  media?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface SectionHeaderProps {
  media?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  divider?: boolean;
  style?: React.CSSProperties;
  }
export interface WidgetCardProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
  padding?: number;
  style?: React.CSSProperties;
  }
```
Exports: `PageHeader`, `SectionHeader`, `WidgetCard`

### Pagination  ·  `components/navigation/Pagination.jsx`

```jsx
<Pagination page={p} total={16} onChange={setP} />
```

Selected cell = primary-lighter + 1px primary stroke.

```ts
export interface PaginationProps {
  page?: number;
  total?: number;
  onChange?: (p: number) => void;
  showSummary?: boolean;
  fullRadius?: boolean;
  style?: React.CSSProperties;
  }
export interface PaginationCellProps {
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  fullRadius?: boolean;
  onClick?: () => void;
  }
```
Exports: `Pagination`, `PaginationCell`

### RichEditor  ·  `components/navigation/RichEditor.jsx`

```jsx
<RichEditor defaultValue="<p>Catatan internal…</p>" />
```

```ts
export interface RichEditorColorProps {
  color?: RichEditorColorName | string;
  style?: React.CSSProperties;
  }
export interface RichEditorItemProps {
  icon?: string;
  label?: React.ReactNode;
  color?: RichEditorColorName | string;
  dropdown?: boolean;
  active?: boolean;
  onClick?: () => void;
  title?: string;
  }
export interface RichEditorToolbarProps {
  variant?: '01' | '02' | '03' | '04';
  active?: RichEditorToolKey[];
  onAction?: (key: RichEditorToolKey) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface RichEditorProps {
  defaultValue?: string;
  placeholder?: string;
  minHeight?: number;
  style?: React.CSSProperties;
  }
```
Exports: `RICH_EDITOR_COLORS`, `RichEditorColor`, `RichEditorItem`, `RichEditorDivider`, `RichEditorToolbar`, `RichEditor`

### Sidebar  ·  `components/navigation/Sidebar.jsx`

```jsx
<Sidebar theme="dark" logo={<img src="assets/logos/amar-bank-bisnis-vertical-default.svg" height={40}/>} sections={[{title:'Utama',items:[{label:'Beranda',icon:'HomeSmile2Line'}]}]} value="Beranda" />
```

Active item: 4px primary edge bar + Mulish 700 16px label.

```ts
export interface SidebarProps {
  logo?: React.ReactNode;
  company?: React.ReactNode;
  sections?: {
  title?: React.ReactNode;
  items: {
  label: React.ReactNode;
  value?: string;
  icon?: string;
  badge?: React.ReactNode;
  chevron?: boolean }[] }[];
  value?: string;
  onChange?: (v: string) => void;
  footer?: React.ReactNode;
  collapsed?: boolean;
  theme?: "light" | "dark";
  style?: React.CSSProperties;
  }
export interface SidebarItemProps {
  icon?: string;
  label?: React.ReactNode;
  active?: boolean;
  collapsed?: boolean;
  badge?: React.ReactNode;
  chevron?: boolean;
  theme?: "light" | "dark";
  onClick?: () => void;
  }
```
Exports: `Sidebar`, `SidebarItem`

### StepIndicatorHorizontal  ·  `components/navigation/StepIndicatorHorizontal.jsx`

```jsx
<StepIndicatorHorizontal steps={['Penerima','Nominal','Konfirmasi']} current={1} />
```

Completed = green check; active = primary filled number.

```ts
export interface StepIndicatorHorizontalProps {
  steps?: React.ReactNode[];
  current?: number;
  onStepClick?: (i: number) => void;
  style?: React.CSSProperties;
  }
export interface StepIndicatorVerticalProps {
  steps?: React.ReactNode[];
  current?: number;
  title?: React.ReactNode;
  onStepClick?: (i: number) => void;
  style?: React.CSSProperties;
  }
```
Exports: `StepIndicatorHorizontal`, `StepIndicatorVertical`

### TabMenuHorizontal  ·  `components/navigation/TabMenuHorizontal.jsx`

```jsx
<SegmentedControl value={t} onChange={setT} items={[{label:'Incoming'},{label:'Outgoing'},{label:'Pending'}]} />
```

```ts
export interface TabMenuHorizontalProps {
  items?: {
  label: React.ReactNode;
  value?: string;
  icon?: string;
  badge?: React.ReactNode }[];
  value?: string;
  onChange?: (v: string) => void;
  style?: React.CSSProperties;
  }
export interface TabMenuVerticalProps {
  items?: {
  label: React.ReactNode;
  value?: string;
  icon?: string;
  badge?: React.ReactNode }[];
  value?: string;
  onChange?: (v: string) => void;
  title?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface SegmentedControlProps {
  items?: {
  label?: React.ReactNode;
  value?: string;
  icon?: string;
  disabled?: boolean }[];
  value?: string;
  onChange?: (v: string) => void;
  style?: React.CSSProperties;
  }
```
Exports: `TabMenuHorizontal`, `TabMenuVertical`, `SegmentedControl`

### TimePicker  ·  `components/navigation/TimePicker.jsx`

```jsx
<TimePicker value={t} onChange={setT} />
```

```ts
export interface TimePickerSlot {
  time: string;
  period?: React.ReactNode;
  rightTime?: React.ReactNode;
  rightPeriod?: React.ReactNode;
  rightText?: boolean;
  }
export interface TimePickerProps {
  slots?: (string | TimePickerSlot)[];
  disabled?: string[];
  value?: string;
  onChange?: (s: string) => void;
  /** @deprecated Items are now full-width rows;
  ignored. */ columns?: number;
  title?: React.ReactNode;
  durations?: string[];
  duration?: string;
  onDurationChange?: (d: string) => void;
  direction?: "right" | "center";
  footer?: React.ReactNode;
  style?: React.CSSProperties;
  }
export interface TimePickerItemProps {
  children?: React.ReactNode;
  time?: React.ReactNode;
  period?: React.ReactNode;
  rightTime?: React.ReactNode;
  rightPeriod?: React.ReactNode;
  rightText?: boolean;
  direction?: "right" | "center";
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  }
export interface TimePickerSelectStatusProps {
  type?: "available" | "busy" | "meeting" | "offline";
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  }
export interface TimePickerSelectDurationProps {
  children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  }
```
Exports: `TimePicker`, `TimePickerItem`, `TimeSlot`, `TimePickerSelectStatus`, `TimePickerSelectDuration`

## brand/

### AmarBankLogo  ·  `components/brand/AmarBankLogo.jsx`

```jsx
<AmarBankLogo lockup="horizontal" color="color" height={30} />
<AmarBankLogo lockup="bisnis-vertical" color="default" height={44} /> {/* on dark sidebar */}
```

Colors: color | white | black (bisnis lockups: color = colored wordmark, default = white wordmark). Logo-mark gradient was reconstructed from Figma stops.

```ts
export interface AmarBankLogoProps {
  lockup?: "horizontal" | "vertical" | "mark" | "bisnis-horizontal" | "bisnis-vertical";
  color?: "color" | "white" | "black" | "default";
  height?: number;
  title?: string;
  style?: React.CSSProperties;
  }
```
Exports: `AmarBankLogo`, `AmarBankHorizontal`, `AmarBankVertical`, `AmarBankWithoutTitle`, `AmarBankBisnisHorizontal`, `AmarBankBisnisVertical`

## illustrations/

### DecorativeIcon  ·  `components/illustrations/DecorativeIcon.jsx`

```jsx
<DecorativeIcon type="electricity" />
```

Biller category medallions (Beli & Bayar).

```ts
export interface DecorativeIconProps {
  type?: "water" | "gas" | "electricity" | "donate" | "internet" | "phone" | "rent" | "tax";
  style?: React.CSSProperties;
  className?: string;
  }
```
Exports: `DecorativeIcon`

### TransactionIllustration  ·  `components/illustrations/TransactionIllustration.jsx`

```jsx
<TransactionIllustration property1="transaction-success" />
```

Result-screen illustration (from New Illustration page).

```ts
export interface TransactionIllustrationProps {
  property1?: "transaction-success" | "transaction-pending" | "transaction-failed";
  style?: React.CSSProperties;
  className?: string;
  }
```
Exports: `TransactionIllustration`

## icons/

### Icon  ·  `components/icons/Icon.jsx`

Exports 1 names — see `components/icons/Icon.d.ts` for the full list.

## flags/

### Flag  ·  `components/flags/Flag.jsx`

```jsx
<Flag name="Indonesia" size={20} />
<Indonesia size={16} />
```

Names are PascalCase country names (UnitedStates, SaudiArabia…). See Flag.d.ts for the full list.

Exports 264 names — see `components/flags/Flag.d.ts` for the full list.
