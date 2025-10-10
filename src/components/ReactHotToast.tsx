// Lib Imports.
import { Toaster } from 'react-hot-toast';

// Defining RHT styles for Manga Trench.
export function Toast() {
  return (
    <Toaster
      toastOptions={{
        loading: {
          iconTheme: {
            primary: '#d3e97a',
            secondary: '#1a1a1a',
          },
        },
        error: {
          iconTheme: {
            primary: '#ff2056',
            secondary: '#1a1a1a',
          },
        },
        success: {
          iconTheme: {
            primary: '#d3e97a',
            secondary: '#1a1a1a',
          },
        },
      }}
    />
  );
}
