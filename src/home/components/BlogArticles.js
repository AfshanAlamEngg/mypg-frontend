import React from 'react';
import { Container, Grid, Paper, Typography, Button, Box } from '@mui/material';

const articles = [
  { id: 1, title: 'How to Choose the Right PG', content: 'Some tips on choosing the right PG.' },
  { id: 2, title: 'PG Living: Pros and Cons', content: 'Discussing the pros and cons of PG living.' },
  { id: 3, title: 'Top 5 PGs in Your City', content: 'A list of the top PGs in your city.' },
];

const BlogArticles = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>
        Blog Articles
      </Typography>
      <Grid container spacing={4}>
        {articles.map(article => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.content}
              </Typography>
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button variant="outlined" color="primary">
                  Read More
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogArticles;
