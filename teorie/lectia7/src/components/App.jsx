import Header from './Header';
import HeroImage from './HeroImage';
import Section from './Section';
import WineryList from './WineryList';

export default function App() {
  return (
    <main className="wrap">
      <article className="card">
        <Header />
        <HeroImage />

        <Section title="Tradiție și istorie">
          <p>
            Moldova are o istorie viticolă de peste 5000 de ani, fiind recunoscută pentru
            calitatea și diversitatea vinurilor sale.
          </p>
        </Section>

        <Section title="Soiuri de vin">
          <ul>
            <li>Feteasca Neagră</li>
            <li>Rara Neagră</li>
            <li>Cabernet Sauvignon</li>
            <li>Merlot</li>
            <li>Chardonnay</li>
          </ul>
        </Section>

        <Section title="Crame renumite">
          <WineryList />
        </Section>

        <footer className="cta">
          <a className="btn" href="#">
            Află mai multe
          </a>
        </footer>
      </article>
    </main>
  );
}
