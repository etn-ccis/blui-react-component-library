import React, { MouseEvent } from 'react';
import { Typography, useTheme, SxProps, Box } from '@mui/material';

const getTopPaddingForAspectRatio = (ratio: AspectRatio | undefined): string => {
    switch (ratio) {
        case '1x1':
            return '100%';
        case '2x1':
            return '50%';
        case '3x2':
            return '66.67%';
        case '4x3':
            return '75%';
        case '16x9':
        default:
            return '56.25%';
    }
};
type AspectRatio = '16x9' | '4x3' | '3x2' | '2x1' | '1x1';
type InfoCardProps = {
    source: string | JSX.Element;
    onClick?: (event: MouseEvent) => void;
    aspectRatio?: AspectRatio;
    title: string;
    description: string;
    descriptionContent?: React.ReactNode;
    spacing: number;
    background?: {
        size?: string;
        position?: string;
        color?: string;
    };
};

const styles: { [key: string]: SxProps } = {
    image: {
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        mb: 2,
        border: `1px solid`,
        borderColor: 'divider',
        position: 'relative',
    },
    card: {
        '&:hover': {
            backgroundColor: 'action.hover',
        },
    },
};

export const InfoCard: React.FC<InfoCardProps> = (props): JSX.Element => {
    const { background = {} } = props;
    const theme = useTheme();

    return (
        <Box
            sx={{
                cursor: props.onClick ? 'pointer' : 'default',
                m: (-1 * props.spacing) / 2,
                p: props.spacing / 2,
                ...(props.onClick ? styles.card : {}),
            }}
            onClick={props.onClick}
        >
            {typeof props.source === 'string' ? (
                <Box
                    sx={{
                        backgroundImage: `url(${props.source})`,
                        backgroundPosition: background.position,
                        backgroundSize: background.size,
                        pt: getTopPaddingForAspectRatio(props.aspectRatio),
                        ...styles.image,
                    }}
                />
            ) : (
                <Box
                    sx={{
                        pt: getTopPaddingForAspectRatio(props.aspectRatio),
                        ...styles.image,
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: background.color,
                        }}
                    >
                        {props.source}
                    </div>
                </Box>
            )}
            <Typography variant={'h6'}>{props.title}</Typography>
            <Typography variant={'body2'} style={{ color: theme.palette.text.secondary, marginTop: theme.spacing(1) }}>
                {props.description}
            </Typography>
            <div>{props.descriptionContent}</div>
        </Box>
    );
};
InfoCard.displayName = 'InfoCard';
InfoCard.defaultProps = {
    aspectRatio: '2x1',
};
