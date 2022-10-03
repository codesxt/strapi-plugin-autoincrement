/*
 *
 * HomePage
 *
 */

import React from 'react';
import { Layout, BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
import { Stack } from '@strapi/design-system/Stack';
import { Card } from '@strapi/design-system/Card';
import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <Box>
      <Layout>
        <Box background="neutral100">
          <BaseHeaderLayout as="h2" title="Autoincrement Custom Field" subtitle="Add autoincrement fields to your Content Types"/>
        </Box>
        <Box background="neutral100">
          <ContentLayout>
            <Card>
              <Box padding={4}>
                <Stack>
                  <Typography>
                    Autoincrement is a plugin that enables autoincrementable Custom Field Types.
                  </Typography>
                  <Typography>
                    It works by creating counters as Custom Types, and creating a counter by
                    each autoincrementable field that you create.
                  </Typography>
                  <Typography>
                    There are two types according to the underlying datatype that you want to use: 
                    <Typography fontWeight="bold"> integer </Typography> and
                    <Typography fontWeight="bold"> biginteger</Typography>.
                  </Typography>
                </Stack>
              </Box>
            </Card>
          </ContentLayout>
        </Box>
      </Layout>
    </Box>    
  );
};

export default HomePage;
