// useTransition is basically a way of setting priority of rendering.
// React always tries to bunch together state changes and do them all at once but if one state change
// is much more expensive than the other, the fast one will have to wait for the slow one to be done.
// use transition gives us a pending variable ans a setTransition function.
// We can use the pending variable to render loading loagic
// we can then use setTransition to wrap whatever expensive logic we want to defer
// That way, the fast code gets priority and only after its executed the expensive code runs

export default function FormList() {
  const [isPending, setTransition] = useTransition();

  return <div></div>;
}
