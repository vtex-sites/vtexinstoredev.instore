import React, { Fragment } from 'react'
import type { FC } from 'react'
import { Heading, Paragraph, Flex } from '@vtex/admin-ui'

export const ContactScreen: FC<{ path: string }> = () => {
  return (
    <Fragment>
      <Heading csx={{ marginTop: 0, marginBottom: 64, maxWidth: 320 }}>
        Contact
      </Heading>
      <Flex
        csx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Paragraph csx={{ marginBottom: '1rem' }}>
          VTEXINSTOREDEV contact for this website is: instoredevs@vtex.com
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
