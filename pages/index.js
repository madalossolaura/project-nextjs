import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import { Button } from '../src/components/commons/Button/styles';

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
      <Menu />

      <div>
        <Text 
          variant="title"
          tag="h1"
          color="tertiary.main"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
        >
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text 
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>

        <Button 
          margin={{
            xs: 'auto',
            md: 'initial',
          }}
          display="block"
          variant="primary.main">
          Cadastrar
        </Button>
      </div>
      
      <Footer />
    </div>
  )
}
