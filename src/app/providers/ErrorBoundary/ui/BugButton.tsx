import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const onThow = () => setError(true);

    useEffect(() => {
        if (error === true) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThow}
        // eslint-disable-next-line i18next/no-literal-string
        >
            trow error
        </Button>
    );
};
