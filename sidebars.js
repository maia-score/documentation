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
              label: 'Email Confirmation',
              collapsed: true,
              items: [
                'paths/auth/email-confirmation/emailConfirmation'
              ],
            }, {
              type: 'category',
              label: 'Forgot Password',
              collapsed: true,
              items: [
                'paths/auth/forgot-password/forgotPassword'
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
                    'paths/auth/local/register/registerAuth'
                  ],
                },
                'paths/auth/local/localAuth'
              ],
            }, {
              type: 'category',
              label: 'Reset Password',
              collapsed: true,
              items: [
                'paths/auth/reset-password/{resetToken}/resetPassword'
              ],
            }, {
              type: 'category',
              label: 'Send Email Confirmation',
              collapsed: true,
              items: [
                'paths/auth/send-email-confirmation/sendEmailConfirmation'
              ],
            }
          ],
        }, {
          type: 'category',
          label: 'Company',
          collapsed: true,
          items: [
            'paths/company/getCompany',
            'paths/company/updateCompany'
          ],
        }, {
          type: 'category',
          label: 'Customers',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: '{id}',
              collapsed: true,
              items: [
                'paths/customers/{id}/getCustomer',
                'paths/customers/{id}/updateCustomer',
                'paths/customers/{id}/deleteCustomer'
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/customers/count/countCustomers'
              ],
            },
            'paths/customers/getCustomers',
            'paths/customers/createCustomer',
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
                'paths/datasources/{id}/getDatasource',
                'paths/datasources/{id}/updateDatasource',
                'paths/datasources/{id}/deleteDatasource'
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/datasources/count/countDatasources'
              ],
            },
            'paths/datasources/getDatasources',
            'paths/datasources/createDatasource',
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
                'paths/payments/{id}/getPayment',
                'paths/payments/{id}/updatePayment',
                'paths/payments/{id}/deletePayment'
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/payments/count/countPayments'
              ],
            },
            'paths/payments/getPayments',
            'paths/payments/createPayment',
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
                'paths/reports/{id}/getReport'
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/reports/count/countReports'
              ],
            },
            'paths/reports/getReports',
            'paths/reports/createReport',
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
                'paths/trainings/{id}/getTraining',
              ],
            },{
              type: 'category',
              label: 'Cancel',
              collapsed: true,
              items: [
                'paths/trainings/cancel/{id}/cancelTraining',
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/trainings/count/countTrainings'
              ],
            },
            'paths/trainings/getTrainings',
            'paths/trainings/createTraining',
          ],
        }, {
          type: 'category',
          label: 'Users',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: '{id}',
              collapsed: true,
              items: [
                'paths/users/{id}/getUser',
                'paths/users/{id}/updateUser',
                'paths/users/{id}/deleteUser'
              ],
            }, {
              type: 'category',
              label: 'Count',
              collapsed: true,
              items: [
                'paths/users/me/getMe'
              ],
            },
            'paths/users/getUsers'
          ],
        }
      ],
    },
  ],
};
