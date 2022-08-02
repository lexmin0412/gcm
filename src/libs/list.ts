import { getAllUserConfigs } from './../utils/index'
import { UserConfig } from './../types'

export const list = () => {
	const configs = getAllUserConfigs()
	console.log(`共${configs.length}个配置`)
	configs.forEach((config: UserConfig) => {
		console.log(`
alias: ${config.alias}
name: ${config.name}
email: ${config.email}
		`)
	});
	console.log('可通过 `gcm use <alias>` 来快速切换配置')
}
