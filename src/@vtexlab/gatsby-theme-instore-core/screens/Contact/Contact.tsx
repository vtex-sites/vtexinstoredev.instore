import React, { Fragment } from 'react'
import type { FC } from 'react'
import { Heading, Paragraph, Flex } from '@vtex/admin-ui'

export const ContactScreen: FC<{ path: string }> = () => {
  return (
    <Fragment>
      <Heading
        styleOverrides={{ marginTop: 0, marginBottom: 64, maxWidth: 320 }}
      >
        Contact
      </Heading>
      <Flex
        styles={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Paragraph styleOverrides={{ marginBottom: '1rem' }}>
          vtexinstoredev contact for this website is actually:
          instoredevs@vtex.com
        </Paragraph>
        <img
          src="https://miro.medium.com/max/1980/0*HICLyAdNSIyT0ODU.jpg"
          width={495}
          height="auto"
          alt="developers"
        />
      </Flex>
    </Fragment>
  )
}
