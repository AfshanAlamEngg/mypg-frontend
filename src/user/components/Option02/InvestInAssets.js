import React from 'react';
import { Box, Typography } from '@mui/material';
import InvestmentForm from './InvestmentForm';
import FinancialAdvice from './FinancialAdvice';

const InvestInAssets = () => {
    return (
        <Box sx={{ p: 3, display: 'flex', gap: 2 }}>
            <InvestmentForm />
            <FinancialAdvice />
        </Box>
    );
};

export default InvestInAssets;

