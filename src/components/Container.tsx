export default function Container(props: any) {
  return <div class="flex flex-col m-8 space-y-4">{props.children}</div>;
}
