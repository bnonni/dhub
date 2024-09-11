export default {
    protocol: 'https://ver5ionhub.com/schemas/github',
    published: true,
    types: {},
    structure: {
        repo: {
            $actions: [
                {
                    who: 'anyone',
                    can: ['read'],
                },
            ],
            commit: {
                $actions: [
                    {
                        who: 'anyone',
                        can: ['read'],
                    },
                ],
            }
        },
    },
};
