/* eslint-disable react/prop-types */
import React from 'react';
import { Controller } from 'react-hook-form';
import FormErrorMessage from "../ErrorMessage";

const CustomController = ({ control, name, render, showError = true, error, messages, ...props }) => {

    return (
        <>
            <Controller
                {...props}
                name={name}
                render={render}
                control={control}
            />
            {
                showError &&
                <FormErrorMessage
                    error={error}
                    messages={messages}
                    position={props.position}
                />
            }
        </>
    )
}

export default CustomController;