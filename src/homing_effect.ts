
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Homing Effect
//===========================================================================
const Trig_Homing_Effect_Func002A = (): void => {

	udg_RoundInfo[ 999 ] = ( udg_RoundInfo[ 999 ] + 1 );
	AddSpecialEffectTargetUnitBJ( "chest", GetEnumUnit(), "Abilities\\Spells\\Other\\BreathOfFire\\BreathOfFireMissile.mdl" )
	udg_HomingEffect[ udg_RoundInfo[ 999 ] ] = GetLastCreatedEffectBJ();

};


const Trig_Homing_Effect_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "h00B" ) );
	ForGroupBJ( udg_TempGroup, Trig_Homing_Effect_Func002A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Homing_Effect = (): void => {

	gg_trg_Homing_Effect = CreateTrigger();
	DisableTrigger( gg_trg_Homing_Effect )
	TriggerRegisterTimerEventPeriodic( gg_trg_Homing_Effect, 0.25 )
	TriggerAddAction( gg_trg_Homing_Effect, Trig_Homing_Effect_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Homing_Effect();

} );
