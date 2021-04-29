import { useRouter } from 'next/router';
import BubbleBackground from '../../components/bubble-background';
import CuteButton from '../../components/cute-button';
import PatreonButton from '../../components/patreon-button';

export default function About() {
  const router = useRouter();

  const navigateHome = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <BubbleBackground>
      <CuteButton onClick={navigateHome} title="M M" />
      <PatreonButton />
    </BubbleBackground>
  );
}
