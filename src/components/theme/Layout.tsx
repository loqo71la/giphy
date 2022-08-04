import Footer from './Footer';

export default function Layout(props: { navbar: JSX.Element, children: JSX.Element }) {
  return (
    <>
      {props.navbar}
      {props.children}
      <Footer />
    </>
  );
}
