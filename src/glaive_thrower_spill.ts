
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Glaive Thrower Spill
//===========================================================================
const Trig_Glaive_Thrower_Spill_Func015C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Glaive_Thrower_Spill_Func024Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I015" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Glaive_Thrower_Spill_Func024C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I013" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Glaive_Thrower_Spill_Func072C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Glaive_Thrower_Spill_Actions = (): void => {

	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// Has to be in every spell
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	TriggerExecute( gg_trg_Reset )
	udg_StartPoint[ udg_Index ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
	udg_Angle[ udg_Index ] = udg_Angle[ udg_LoopIndex ];
	CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
	UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
	udg_Missile[ udg_Index ] = GetLastCreatedUnit();
	udg_DamageSource[ udg_Index ] = udg_DamageSource[ udg_LoopIndex ];
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// This determines whether the casting unit will move with the missile or not
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_Jump[ udg_Index ] = false;

	if ( ( Trig_Glaive_Thrower_Spill_Func015C() ) ) {

		UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
		UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

	} else {

	null

	}

	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// Teleportation when the missile dies:
	// 1 = Caster Teleports to the missile; 2 = Damaged units teleport to the caster; 3 = Caster and damaged units teleport; Anything else = nothing
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_Teleportation[ udg_Index ] = 0;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// Total distance the missile will travel
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------

	if ( ( Trig_Glaive_Thrower_Spill_Func024C() ) ) {

		udg_Distance[ udg_Index ] = 200;

	} else {


		if ( ( Trig_Glaive_Thrower_Spill_Func024Func001C() ) ) {

			udg_Distance[ udg_Index ] = 300;

		} else {

			udg_Distance[ udg_Index ] = 400;

		}


	}

	// Use if/then statements to set min/max distances
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// Attack Type(go to Advanced>Gameplay Constants to see the damage tables for the attacks)
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// Damage method, 1 = explode on collision; 2 = periodic damage pulse( every .03 seconds); 3 = damage once on collision; anything else = explosive landing
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_DamageMethod[ udg_Index ] = 2;
	// If 1 or anything but 1/2/3: Explode radius, units within this range when the missile explodes suffer damage(or healing)
	udg_ExplodeRadius[ udg_Index ] = 100;
	// If 1 or anything but 1/2/3: the effect on exploded, otherwise, the effect when a unit takes damage
	udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Weapons\\GryphonRiderMissile\\GryphonRiderMissileTarget.mdl";
	// If 2 or 3, the place the above effect will be created on the damaged unit
	udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// Unit collision radius, units within this range will trigger the explosion or take damage
	// Exploding missiles automatically explode when they travel the max distance, so feel free to leave this at 0 if that is the case
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_CollisionRadius[ udg_Index ] = 100;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// Damage done to a unit when damage is triggered based on the damage method
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_Damage[ udg_Index ] = 1000;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// 1 = targets enemies; 2 = targets allies; Anything else = deals <damage> to enemies and -<damage> to allies
	// The casting unit can only be damaged or healed by a retracting missile, or an explosion
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_Targets[ udg_Index ] = 1;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// 1 = Only units; 2 = Only buildings; Anything Else = Both
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_TargetsAdvanced[ udg_Index ] = 0;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// If true, the missile will drag units within <CollisionRadius> with it
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_Drag[ udg_Index ] = false;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// If true, when the missile dies, it will link to objects within <Explode Radius>, pulling the caster towards buildings/destructibles, and pulling other units to the caster
	// If there are no units within <ExplodeRadius>, the missile will return and attempt to link with units in <CollisionRadius>
	// Looks much better with lightning effects
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_Link[ udg_Index ] = false;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// If true, Lightning will link the caster and missile
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_Lightning[ udg_Index ] = false;

	if ( ( Trig_Glaive_Thrower_Spill_Func072C() ) ) {

		AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
		udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

	} else {

	null

	}

	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// Speed, in movement speed of the missile. Dont touch the second part.
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_Speed[ udg_Index ] = 500;
	udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// The maximum height the missile will reach, negative acts like 0
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_VerticalArc[ udg_Index ] = 0;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// The maximum distance the missile will arc to the right or left, use negative values for left
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_HorizontalArc[ udg_Index ] = 0;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// The missile model
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\BallistaMissile\\BallistaMissile.mdl";
	AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
	udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// The missile size and color
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_MissileSize[ udg_Index ] = 155;
	SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
	SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// What the missile does when it approaches a cliiff
	// 1 = Missile destroyed on contact(damages destructibles); 2 = Bounce off on contact; anything else = move over
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_TerrainReaction[ udg_Index ] = 0;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// What the missile does when it approaches a tree or other destructible
	// 1 = Missile destroyed on contact(damages destructibles); 2 = Bounce off on contact; anything else = move over
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_TreeReaction[ udg_Index ] = 0;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// What the missile does when it approaches boundary(the black stuff)
	// 1 = Missile destroyed on contact; 2 = Bounce off on contact; anything else = move over
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_BoundaryReaction[ udg_Index ] = 0;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// What the missile does when it approaches buildings
	// 1 = Missile destroyed on contact; 2 = Bounce off on contact; 3 = Bounce off and deal <damage> damage(deals it once); anything else = move over
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	udg_BuildingReaction[ udg_Index ] = 0;
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------
	// What the missile will do after reaching its destination, no explosive missilies cant do 1-6, only explosive landing missiles can do after 6
	// aka, 1-6=periodic damage or one time damage on collision, after 6  = explosive landing only, explode on collision have no after destination
	// 1 = Double distance including arc; 2 = return to cast point including arc; 3 = 1 then 2; 4 = double distance return;
	// 5 = return with tracking; 6 = change damage to heal, change hits enemies to hits allies, and returns with tracking;
	// 7 = bounces once, half height half distance; 8 = bounces once, half height/distance/damage
	// 9 = bounces twice, half height half distance; 10 = bounces twice, half height/distance/damage
	// 11 = fragment into 3 shards, each dealing 1/3 damage in 1/2 aoe; 12 = does 7 then 11;
	// 13 = does 8 then 11
	//  anything else = nothing.
	// -----------------------------------------------------------------------------------------------------------------------------------------------------------

};


//===========================================================================
const InitTrig_Glaive_Thrower_Spill = (): void => {

	gg_trg_Glaive_Thrower_Spill = CreateTrigger();
	TriggerAddAction( gg_trg_Glaive_Thrower_Spill, Trig_Glaive_Thrower_Spill_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Glaive_Thrower_Spill();

} );
