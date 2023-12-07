import { Helmet } from "react-helmet";

const Insta = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="shortcut icon"
        href="https://png.pngtree.com/element_our/png/20181011/instagram-social-media-icon-design-template-vector-png_126996.png"
        type="image/x-icon"
      />
    </Helmet>
  );
};

export default Insta;
