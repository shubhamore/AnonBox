import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function Feature({title,description}:{title:string,description:string}) {
  return (
    <div className='flex-1 flex max-w-sm min-w-60 text-center'>
      <Card>
        <CardHeader>
          <CardTitle>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {description}
        </CardContent>
      </Card>
    </div>
  )
}
