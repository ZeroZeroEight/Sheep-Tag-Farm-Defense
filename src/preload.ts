
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Preload
//===========================================================================
const Trig_Preload_Actions = (): void => {

	udg_TempPoint = GetRectCenter( gg_rct_Dummy );
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Undead\\AnimateDead\\AnimateDeadTarget.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\RocketMissile\\RocketMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Undead\\CarrionSwarm\\CarrionSwarmMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Undead\\DeathCoil\\DeathCoilMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Undead\\DeathCoil\\DeathCoilSpecialArt.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Units\\NightElf\\Wisp\\WispExplode.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Orc\\CommandAura\\CommandAura.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Orc\\FeralSpirit\\feralspirittarget.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\FireBallMissile\\FireBallMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Undead\\FreezingBreath\\FreezingBreathMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\FrostWyrmMissile\\FrostWyrmMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Undead\\FrostNova\\FrostNovaTarget.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Human\\HolyBolt\\HolyBoltSpecialArt.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Items\\AIil\\AIilTarget.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Human\\MassTeleport\\MassTeleportTo.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Human\\MassTeleport\\MassTeleportCaster.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Human\\MassTeleport\\MassTeleportTarget.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Orc\\MirrorImage\\MirrorImageCaster.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Other\\BreathOfFire\\BreathOfFireMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\AncientProtectorMissile\\AncientProtectorMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\CannonTowerMissile\\CannonTowerMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\GyroCopter\\GyroCopterMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\SentinelMissile\\SentinelMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\MoonPriestessMissile\\MoonPriestessMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\SteamTank\\SteamTankImpact.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Objects\\Spawnmodels\\NightElf\\EntBirthTarget\\EntBirthTarget.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\BallistaMissile\\BallistaMissile.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	RemoveLocation( udg_TempPoint )

};


//===========================================================================
const InitTrig_Preload = (): void => {

	gg_trg_Preload = CreateTrigger();
	TriggerRegisterTimerEventSingle( gg_trg_Preload, 0.1 )
	TriggerAddAction( gg_trg_Preload, Trig_Preload_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Preload();

} );

