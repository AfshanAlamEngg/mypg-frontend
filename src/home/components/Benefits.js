import React from 'react';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const benefits = [
  { id: 1, title: 'Affordable', description: 'Our PGs are budget-friendly without compromising on quality.' },
  { id: 2, title: 'Convenient Locations', description: 'All PGs are located in prime areas with easy access to public transport.' },
  { id: 3, title: 'Quality Amenities', description: 'Enjoy high-quality amenities and services.' },
];

const Benefits = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f4f8', py: 8 }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6, color: '#004d40' }}>
          Why Choose Us?
        </Typography>
        {benefits.map(benefit => (
          <Accordion key={benefit.id} sx={{ mb: 2, borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${benefit.id}-content`}
              id={`panel${benefit.id}-header`}
              sx={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle color="primary" sx={{ fontSize: '2rem', mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#004d40' }}>
                  {benefit.title}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {benefit.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default Benefits;
