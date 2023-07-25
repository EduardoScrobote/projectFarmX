import Header from '../components/Header'

function Home() {
  return (
    <div className="snap-y">
    <Header />
      <div>
        <h1 className="mt-6 text-3xl ml-4">Bem vindo ao Project Farm X</h1>
      </div>
      <div className="snap-y snap-start">
        <p className="w-64 mt-24 ml-44 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          urna eu ante vestibulum fermentum a pellentesque neque. Aliquam
          lobortis odio eget ipsum molestie egestas. Suspendisse potenti.
          Pellentesque et ante mollis, viverra massa sit amet, congue leo.
          Curabitur sed ex felis. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Pellentesque orci lorem, tempus interdum mi ut,
          tincidunt imperdiet magna. Mauris ullamcorper, dolor et laoreet
          varius, libero turpis lobortis urna, eu aliquet arcu mauris eget erat.
          Nullam aliquam interdum orci. Suspendisse sed molestie erat. Vivamus
          malesuada nunc a faucibus laoreet. Etiam eleifend erat finibus nisl
          condimentum, molestie ornare arcu tincidunt.
        </p>
      </div>
      <br />
      <div className="grid justify-items-end snap-start snap-y text-xl">
        <p className="text-right w-64 mr-44 mt-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
          dolor id quam tincidunt eleifend. Integer id tortor et dolor fermentum
          ultricies et vitae justo. Aenean eleifend, nisl ultrices iaculis
          ultrices, ligula justo cursus nibh, nec viverra lorem leo sed est. Sed
          placerat varius finibus. Cras commodo, elit et maximus fermentum, arcu
          lorem tristique mauris, id molestie dolor velit ut orci. Sed
          sollicitudin eu diam et sodales. Phasellus bibendum lacus ornare nunc
          fringilla, at tristique est interdum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed laoreet orci a purus luctus, id
          volutpat tortor facilisis. Etiam eget sodales leo. Praesent neque
          turpis, interdum a arcu sed, aliquam consectetur elit. Duis
          scelerisque euismod leo, at vestibulum odio tempor vel. Sed quis
          rhoncus massa. Nam rhoncus, diam a sagittis sodales, velit odio
          pharetra arcu, sed pellentesque ex velit sit amet quam. Fusce laoreet
          ultricies dui, pulvinar molestie neque eleifend vel. Curabitur non
          nisi porta, dignissim justo at, tincidunt diam.
        </p>
      </div>
    </div>
  );
}

export default Home;
