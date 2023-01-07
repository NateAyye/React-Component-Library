import Head from "next/head";
import { Inter } from "@next/font/google";
import Card from "../components/styled/blocks/Card";
import Button from "../components/styled/elements/Button";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />

      </Head>
      <main style={{ height: 100 + "vh", background: 'black', }}>

        <Button activated color='#ff00ff' glow >Default</Button>
        <Button activated color='#24acf2' glow >Default</Button>
        <Button color='orange' glow >Default</Button>
        <Button color='yellow' glow >Default</Button>
        <Button color='green' glow >Default</Button>
        <Button color='blue' glow >Default</Button>
        <Button color='indigo' glow >Default</Button>
        <Button color='violet' glow >Default</Button>
        <Button activated color='white' >Default</Button>
        <Button color='red' >Default</Button>
        <Button color='orange' >Default</Button>
        <Button color='yellow' >Default</Button>
        <Button color='green' >Default</Button>
        <Button color='blue' >Default</Button>
        <Button color='indigo' >Default</Button>
        <Button color='violet' >Default</Button>
        <Button>Default</Button>

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: "center",}}>
        <Card>
          <Card.Header>
            <Card.Image
              src="https://github.com/NateAyye.png"
              alt="Card Picture"
            />
            <Card.Title>Nathan Cuevas</Card.Title>
          </Card.Header>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nesciunt nemo veniam eveniet? Libero quasi fugiat vero quos, eos rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est molestiae et consequuntur laudantium velit architecto porro nesciunt maiores saepe corporis!
          </Card.Text>
        </Card>
        <Card>
          <Card.Header>
            <Card.Image
              src="https://github.com/NateAyye.png"
              alt="Card Picture"
            />
            <Card.Title>Nathan Cuevas</Card.Title>
          </Card.Header>
          <Card.Text>
            Wellcome to the Card made from styled components
          </Card.Text>
        </Card>
        </div>
      </main>
    </>
  );
}
