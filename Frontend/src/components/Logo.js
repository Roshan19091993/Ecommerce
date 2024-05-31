import React from 'react'
import  logo from '../assest/Logo/Funky Factory Logo.jpg';

const Logo = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100px',
      height: '50px',
      backgroundColor: 'purple',
      borderRadius: '50%',
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    },
  };

  return <div style={styles.container}>
   funcky store
  </div>;
}

export default Logo