import { Redirect } from 'expo-router';

export default function AppIndex() {
  // Always show onboarding first; later we can add a flag to skip if seen
  return <Redirect href="/(onboarding)" />;
}
