import router from '@adonisjs/core/services/router'
import app from '@adonisjs/core/services/app'

/**
 * Construct something with the IoC container
 */
export function make<Binding>(name: Binding) {
  return app.container.make(name)
}

/**
 * Define a route group.
 * Basically better than `router.group()` because you don't need
 * to scroll to the bottom of the file to see what is the prefix
 */
export function defineRouteGroup(prefixOrCallback: string | (() => void), callback?: () => void) {
  if (typeof prefixOrCallback === 'function') {
    callback = prefixOrCallback
    prefixOrCallback = ''
  }

  const group = router.group(callback!)
  if (prefixOrCallback) group.prefix(prefixOrCallback)

  return group
}
