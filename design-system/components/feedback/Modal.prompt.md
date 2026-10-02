Modal (+ ModalHeader, ModalFooter, StatusModal) — see the JSDoc on each export in Modal.jsx for what & when.

```jsx
<Modal open onClose={close}>
  <ModalHeader title="Konfirmasi Transfer" icon="SendPlaneLine" onClose={close} />
  <div style={{padding:20}}>…</div>
  <ModalFooter><Button variant="stroke" tone="neutral" size="sm">Batal</Button><Button size="sm">Kirim</Button></ModalFooter>
</Modal>
```

Dialog radius 20; overlay = overlay-soft + 4px blur.
