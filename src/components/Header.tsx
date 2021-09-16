export const Header = ({ selectedGenre }: any) => (
  <header>
    <span className="category">
      Categoria:<span> {selectedGenre.title}</span>
    </span>
  </header>
);
