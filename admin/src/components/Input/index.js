import { Box } from '@strapi/design-system/Box'
import { Field, FieldError, FieldHint, FieldInput, FieldLabel } from '@strapi/design-system/Field'
import { Flex } from '@strapi/design-system/Flex'
import { Stack } from '@strapi/design-system/Stack'
import React, { useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'

/**
 *
 * @param description
 * @param {string} placeholder
 * @param {boolean} disabled
 * @param error
 * @param intlLabel
 * @param labelAction
 * @param {string} name
 * @param onChange
 * @param {boolean} required
 * @param {string} value
 * @return {JSX.Element}
 * @constructor
 */
const Input = ({ description, placeholder, disabled, error, intlLabel, labelAction, name, onChange, required, value }) => {
  const { formatMessage } = useIntl()
  const [generated, setGenerated] = useState(value ?? 0)
  const ref = useRef(null)
  useEffect(() => {
    if (generated && ref.current && value !== generated) {
      ref.current.value = generated
      onChange({ target: ref.current })
    }
  }, [generated])
  return (
    <Box>
      <Field
        id={name}
        name={name}
        hint={description && formatMessage(description)}
        error={
          error ?? value < 0
            ? formatMessage({
                id: 'autoincrement.form.field.error',
                defaultMessage: 'The counter value is invalid.',
              })
            : null
        }
      >
        <Stack spacing={1}>
          <Flex>
            <FieldLabel>{formatMessage(intlLabel)}</FieldLabel>
          </Flex>
          <FieldInput
            ref={ref}
            labelAction={labelAction}
            placeholder={placeholder}
            disabled={disabled}
            requried={required}
            value={value}
            onChange={onChange}
          />
          <FieldHint />
          <FieldError />
        </Stack>
      </Field>
    </Box>
  )
}

export default Input