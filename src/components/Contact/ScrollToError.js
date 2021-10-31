import React, { useEffect } from "react";
import { useFormikContext } from 'formik';

function ScrollToError() {
    const { errors, isSubmitting, isValidating, setSubmitting } =
        useFormikContext();

    useEffect(() => {
        const keys = Object.keys(errors);

        if (keys.length > 0 && isSubmitting && !isValidating) {
            let firstErrorKey = keys[0];
            const errorElementWithName = document.querySelector(
                `div input[name="${firstErrorKey}"]`
            );
            const errorElementWithId = document.getElementById(firstErrorKey);
            const errorElement = errorElementWithName || errorElementWithId;
            if (errorElement) {
                // When there is an input, scroll this input into view.
                errorElement.scrollIntoView({
                    behavior: 'auto',
                    block: 'center',
                    inline: 'center',
                });
                errorElement.focus();
                // after scrolling into first error, make submitting as false
                // when user tries to submit again formik will update issubmitting value
                setSubmitting(false);
            }
        }
    }, [
        isSubmitting, 
        isValidating, 
        errors
    ]);

    return null;
}

export default ScrollToError;