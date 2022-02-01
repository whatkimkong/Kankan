import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Container } from '../components/Container'
import { Headline } from '../components/Headline'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'

import AuthForm from '../components/auth/AuthForm';

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container height="100vh">
        <Headline />
        <DarkModeSwitch />
        <AuthForm />
        <CTA />
    </Container>  
  );
}

export default AuthPage;