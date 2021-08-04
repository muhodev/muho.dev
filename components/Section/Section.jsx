export function Section(props) {
  return (
    <section>
      <div className="section__container">{props.children}</div>
    </section>
  );
}
