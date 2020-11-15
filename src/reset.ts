import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Reset
//===========================================================================
const Trig_Reset_Func001C = (): boolean => {


	if ( ( ! ( udg_Index === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Reset_Actions = (): void => {


	if ( ( Trig_Reset_Func001C() ) ) {

		EnableTrigger( gg_trg_Missile_Periodic )

	} else {

	null

	}

  udg_Index = ( udg_Index + 1 );
	udg_IndexReseter = ( udg_IndexReseter + 1 );
	udg_AlreadyHit[ udg_Index ] = CreateGroup();
	udg_DamageSource[ udg_Index ] = null;
	udg_Jump[ udg_Index ] = false;
	udg_HasBounced[ udg_Index ] = false;
	udg_Teleportation[ udg_Index ] = 0;
	udg_Distance[ udg_Index ] = 0;
	udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
	udg_DamageMethod[ udg_Index ] = 0;
	udg_ExplodeRadius[ udg_Index ] = 0;
	udg_DamageSpecialEffect[ udg_Index ] = "";
	udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "";
	udg_CollisionRadius[ udg_Index ] = 0;
	udg_Damage[ udg_Index ] = 0;
	udg_Targets[ udg_Index ] = 1;
	udg_TargetsAdvanced[ udg_Index ] = 0;
	udg_Drag[ udg_Index ] = false;
	udg_Link[ udg_Index ] = false;
	udg_AfterLinkDeath[ udg_Index ] = 0;
	udg_Lightning[ udg_Index ] = false;
	udg_Speed[ udg_Index ] = 0;
	udg_VerticalArc[ udg_Index ] = 0;
	udg_HorizontalArc[ udg_Index ] = 0;
	udg_MissileEffectString[ udg_Index ] = "";
	udg_TerrainReaction[ udg_Index ] = 0;
	udg_TreeReaction[ udg_Index ] = 0;
	udg_BoundaryReaction[ udg_Index ] = 0;
	udg_BuildingReaction[ udg_Index ] = 0;
	udg_AfterDestination[ udg_Index ] = 0;

};


//===========================================================================
const InitTrig_Reset = (): void => {

	gg_trg_Reset = CreateTrigger();
	TriggerAddAction( gg_trg_Reset, Trig_Reset_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Reset();
} );
