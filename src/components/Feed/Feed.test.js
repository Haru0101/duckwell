// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Feed from './Feed';

describe('Feed', () => {
  const props = {
    edges: [
      {
        node: {
          fields: {
            slug: '/test_0',
            categorySlug: '/test_0',
          },
          frontmatter: {
            date: '2016. 9. 1.',
            category: 'test_0',
            title: 'test_0'
          },
          id: 'test-123',
          html: '<p>test</p>'

        }
      },
      {
        node: {
          fields: {
            slug: '/test_1',
            categorySlug: '/test_1',
          },
          frontmatter: {
            date: '2016. 9. 1.',
            category: 'test_1',
            title: 'test_1'
          },
          id: 'test-321',
          html: '<p>test</p>'

        }
      }
    ]
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Feed {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
