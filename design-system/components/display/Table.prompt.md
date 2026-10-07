Table (+ TableHeaderCell, TableRowCell, TableRowDivider, SortingIcon) — see the JSDoc on each export in Table.jsx for what & when.

```jsx
<Table columns={[{key:'name',header:'Penerima',sortable:true},{key:'amount',header:'Nominal',align:'right'}]} rows={rows} />

<TableRowCell priority="leading" media={<KeyIcon size="md" />} title="Budi Santoso" description="budi@amarbank.co.id" />
<TableRowCell misc><StatusBadge status="completed">Aktif</StatusBadge></TableRowCell>
```

Header row is 40px bg-weak-50 with rounded ends (Paragraph/Small sub-600, 20px sort icons) and an 8px gap before the body; rows are separated by `TableRowDivider` (4px gap, 1px line, 4px gap). Row cell priority: leading = Label/Small strong, regular = Paragraph/Small strong, passive = Paragraph/Small sub-600.
