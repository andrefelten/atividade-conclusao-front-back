import { Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form/Index';


const Login: React.FC = () => {
  return (
    <>
      <Grid
        container
        height={'100vh'} 
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          backgroundColor: '#c80dc8d5'
        }}
      >
        <Grid
          item
          height={'70%'}
          xs={12}
          sm={8}
          md={5}
          sx={{ backgroundColor: '#06060770', borderRadius: '5%' }}
        >
          <Grid container height={'100%'}>
            <Grid
              item
              height={'100%'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-around'}
              padding={8}
            >
              <Typography variant="h4" textAlign={'center'}>
                Bem-vindo 
              </Typography>
              <Form type="login" />
              <Typography variant="body2" textAlign={'center'}>
                Ainda não possui uma conta?{' '}
                <Link to="/cadastro" style={{ color: 'inherit' }}>
                  Cadastre-se
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
