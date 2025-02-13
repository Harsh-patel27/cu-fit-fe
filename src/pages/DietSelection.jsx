/*import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


return (
    <Container className={classes.root}>
        <Typography variant="h4" className={classes.header}>
            Select your diet
        </Typography>
        {dietOptions.map((option) => (
            <Button
                key={option.label}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                {option.emoji} {option.label}
            </Button>
        ))}
    </Container>
);
import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4),
    },
    header: {
        marginBottom: theme.spacing(4),
    },
    button: {
        margin: theme.spacing(1),
        width: '200px',
    },
}));

const dietOptions = [
    { label: 'No Diet at all', emoji: '🚫' },
    { label: 'Intermediate Fasting', emoji: '⏰' },
    { label: 'Bulking', emoji: '💪' },
    { label: 'Gluten Free', emoji: '🌾' },
    { label: 'Raw Food', emoji: '🥗' },
    { label: 'Keto', emoji: '🥓' },
];

const DietSelection = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h4" className={classes.header}>
                Select your diet
            </Typography>
            {dietOptions.map((option) => (
                <Button
                    key={option.label}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    {option.emoji} {option.label}
                </Button>
            ))}
        </Container>
    );
};

export default DietSelection; */