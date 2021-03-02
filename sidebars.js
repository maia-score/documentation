module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/sdks',
        'getting-started/contributing',
        'getting-started/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: '📄 Core API',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Auth',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: '{Provider}',
              collapsed: true,
              items: [
                'paths/auth/{provider}/callback/get'
              ],
            }, {
              type: 'category',
              label: 'Email Confirmation',
              collapsed: true,
              items: [
                'paths/auth/email-confirmation/get'
              ],
            }, {
              type: 'category',
              label: 'Forgot Password',
              collapsed: true,
              items: [
                'paths/auth/forgot-password/post'
              ],
            }, {
              type: 'category',
              label: 'Local',
              collapsed: true,
              items: [
                {
                  type: 'category',
                  label: 'Register',
                  collapsed: true,
                  items: [
                    'paths/auth/local/register/post'
                  ],
                },
                'paths/auth/local/post'
              ],
            }, {
              type: 'category',
              label: 'Reset Password',
              collapsed: true,
              items: [
                'paths/auth/reset-password/post'
              ],
            }, {
              type: 'category',
              label: 'Send Email Confirmation',
              collapsed: true,
              items: [
                'paths/auth/send-email-confirmation/post'
              ],
            }
          ],
        }, {
          type: 'category',
          label: 'Company',
          collapsed: true,
          items: [
            'paths/company/get',
            'paths/company/put',
            'paths/company/delete',
          ],
        }, {
          type: 'category',
          label: 'Custumers',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: '{id}',
              collapsed: true,
              items: [
                'paths/customers/{id}/get',
                'paths/customers/{id}/put',
                'paths/customers/{id}/delete'
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/customers/count/get'
              ],
            },
            'paths/customers/get',
            'paths/customers/post',
          ],
        }, {
          type: 'category',
          label: 'Data Sources',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: '{id}',
              collapsed: true,
              items: [
                'paths/datasources/{id}/get',
                'paths/datasources/{id}/put',
                'paths/datasources/{id}/delete'
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/datasources/count/get'
              ],
            },
            'paths/datasources/get',
            'paths/datasources/post',
          ],
        }, {
          type: 'category',
          label: 'Payments',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: '{id}',
              collapsed: true,
              items: [
                'paths/payments/{id}/get',
                'paths/payments/{id}/put',
                'paths/payments/{id}/delete'
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/payments/count/get'
              ],
            },
            'paths/payments/get',
            'paths/payments/post',
          ],
        }, {
          type: 'category',
          label: 'Reports',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: '{id}',
              collapsed: true,
              items: [
                'paths/reports/{id}/get',
                'paths/reports/{id}/put',
                'paths/reports/{id}/delete'
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/reports/count/get'
              ],
            },
            'paths/reports/get',
            'paths/reports/post',
          ],
        }, {
          type: 'category',
          label: 'Trainings',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: '{id}',
              collapsed: true,
              items: [
                'paths/trainings/{id}/get',
                'paths/trainings/{id}/put',
                'paths/trainings/{id}/delete'
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/trainings/count/get'
              ],
            },
            'paths/trainings/get',
            'paths/trainings/post',
          ],
        }
      ],
    },
  ],
};
